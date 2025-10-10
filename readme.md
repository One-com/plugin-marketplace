# Marketplace Module

A reusable WordPress plugin module for managing and displaying a marketplace of plugins with a React frontend and PHP backend. Designed to be embedded into other plugins while providing install/activate functionality and a REST API.

---

## Features

- React-based frontend for displaying plugin listings
- Backend PHP controller & model to handle API requests and install/activate actions
- Works inside WordPress Admin and can be used in React apps
- REST API endpoint for fetching plugin data
- Flexible CSS loading – custom or default styles
- Composer-ready with PSR-4 autoloading
- Mozart-compatible for distribution and wrapping namespaces to avoid conflicts

---

## Installation with Mozart (Recommended for Distributable Plugins)

This module is designed to work when your plugin uses the Mozart tool to prefix namespaces and copy assets at build time.

Step-by-step

1) Add repository and dependency to your plugin's composer.json

Example of a complete composer.json (minimal):

```json
{
  "name": "your-vendor/your-plugin",
  "type": "wordpress-plugin",
  "require": {
    "php": ">=8.0",
    "groupone/marketplace": "^1.0"
  },
  "repositories": [
    { "type": "vcs", "url": "git@gitlab.group.one:wp-in/marketplace.git" }
  ],
  "require-dev": {
    "coenjacobs/mozart": "^0.7"
  },
  "autoload": {
    "psr-4": {
      "YourVendor\\YourPlugin\\": "src/",
      "YourPlugin\\Vendor\\": "vendor-prefixed/"
    },
    "classmap": [
      "vendor-prefixed/YourPlugin/Vendor/"
    ]
  },
  "extra": {
    "mozart": {
      "dep_namespace": "YourPlugin\\Vendor\\",
      "dep_directory": "/vendor-prefixed/",
      "classmap_directory": "/vendor-prefixed/",
      "packages": [
        "groupone/marketplace"
      ],
      "delete_vendor_directories": false
    }
  },
  "scripts": {
    "post-install-cmd": [
      "@mozart-compose",
      "@copy-assets",
      "composer dump-autoload -o"
    ],
    "post-update-cmd": [
      "@mozart-compose",
      "@copy-assets",
      "composer dump-autoload -o"
    ],
    "mozart-compose": [
      "[ -f vendor/bin/mozart ] && php vendor/bin/mozart compose || echo 'Mozart not found, skipping...'"
    ],
    "copy-assets": [
      "mkdir -p vendor-prefixed/YourPlugin/Vendor/Groupone/Marketplace/frontend",
      "mkdir -p vendor-prefixed/YourPlugin/Vendor/Groupone/Marketplace/assets",
      "[ -d vendor/groupone/marketplace/frontend ] && rsync -a vendor/groupone/marketplace/frontend/ vendor-prefixed/YourPlugin/Vendor/Groupone/Marketplace/frontend/ || true",
      "[ -d vendor/groupone/marketplace/assets ] && rsync -a vendor/groupone/marketplace/assets/ vendor-prefixed/YourPlugin/Vendor/Groupone/Marketplace/assets/ || true",
      "[ -d vendor-prefixed/Groupone ] && rm -rf vendor-prefixed/Groupone || true"
    ]
  },
  "config": {
    "allow-plugins": {
      "composer/installers": true
    }
  }
}
```

2) Run Mozart to prefix and copy assets into your plugin

```bash
composer install
```

3) Bootstrap the module in your plugin code

```php
// Composer autoloader registers both your plugin classes and the Mozart-prefixed dependencies
require_once __DIR__ . '/vendor/autoload.php';

// Using the Mozart-prefixed class name after Composer autoload is registered
\YourPlugin\Vendor\Groupone\Marketplace\Marketplace::run([
    'parent_menu_slug' => 'your-menu-slug',
    'page_title'       => 'Plugin Marketplace',
    'menu_title'       => 'Marketplace',
    'menu_slug'        => 'plugin-marketplace',
    'api_url'          => 'https://example.com/marketplace.json',
    // Optional: Explicitly set assets path if auto-detection doesn't work
    // 'assets_path'      => __DIR__ . '/vendor-prefixed/Groupone/Marketplace/',
]);
```

---

## Configuration Options

- parent_menu_slug: WordPress menu slug under which the module submenu will be added. Default: options-general.php
- page_title: Page title for the Marketplace screen. Default: Plugin Marketplace
- menu_title: Menu title for the submenu. Default: Marketplace
- menu_slug: Slug used for the submenu and page. Default: plugin-marketplace
- api_url: External API endpoint returning marketplace data. Default: ""
- css_url: URL to a custom CSS file that styles the frontend. Default: ""
- css_handle: WordPress style handle when registering/enqueuing styles. Default: marketplace-frontend-style
- assets_path: Filesystem path to the package root containing the frontend/ directory. If empty, the module auto-detects it (see below).
- register_menu: Boolean flag to control automatic menu registration. Set to `false` to skip menu registration when your plugin handles it manually (prevents duplicate menus). Default: true

---

## Assets Path Configuration

- Explicit: Pass assets_path in the config. Example:

```php
\Groupone\Marketplace\Marketplace::run([
  'assets_path' => WP_PLUGIN_DIR . '/your-plugin/vendor-prefixed/'
]);
```


---

## How It Works

When booted, the module:

- Registers a submenu page under the provided parent_menu_slug
- Enqueues the React frontend (frontend/build assets)
- Localizes configuration and labels to JavaScript
- Registers a REST route at /wp-json/marketplace/v1/plugins
- Provides AJAX handlers to install, activate, and deactivate plugins

---

## Asset Copying

How to reference assets

- If you keep the default structure suggested in the example composer.json, assets_path can be omitted because auto-detection will locate the package root.
- If you move files to a custom location, pass assets_path explicitly so the module can find frontend/build/index.js and related files.

---

## Requirements

- PHP >= 8.0
- WordPress >= 5.8
- Composer (for development and building)
- Mozart (for wrapping namespaces and copying assets)

---



---

Recommended integration pattern (robust, reusable)

The most robust way to embed this module across multiple plugins while avoiding duplicate vendor trees is:

1) Composer configuration in your plugin

- Require the Marketplace package from GitHub (or your VCS):
- Install Mozart as a dev tool.
- Ask Mozart to output into a plugin‑specific, namespaced folder under vendor-prefixed/<YourPluginPrefix>/Vendor/…
- Let Composer also autoload those files (via PSR‑4 base and/or a classmap) so you don’t rely on Mozart’s own autoload.php being present.

Example composer.json snippet:

{
  "require": {
    "php": ">=7.4",
    "groupone/marketplace": "dev-embeddable-ui-poc"
  },
  "require-dev": {
    "coenjacobs/mozart": "^0.7"
  },
  "autoload": {
    "psr-4": {
      "YourPlugin\\Vendor\\": "vendor-prefixed/"
    },
    "classmap": [
      "vendor-prefixed/YourPlugin/Vendor/"
    ]
  },
  "extra": {
    "mozart": {
      "dep_namespace": "YourPlugin\\Vendor\\",
      "dep_directory": "/vendor-prefixed/YourPlugin/Vendor/",
      "classmap_directory": "/vendor-prefixed/YourPlugin/Vendor/",
      "packages": [
        "groupone/marketplace"
      ],
      "delete_vendor_directories": false
    }
  },
  "scripts": {
    "post-install-cmd": [
      "@mozart-compose",
      "@copy-assets",
      "composer dump-autoload -o"
    ],
    "post-update-cmd": [
      "@mozart-compose",
      "@copy-assets",
      "composer dump-autoload -o"
    ],
    "mozart-compose": [
      "[ -f vendor/bin/mozart ] && php vendor/bin/mozart compose || echo 'Mozart not found, skipping...'"
    ],
    "copy-assets": [
      "mkdir -p vendor-prefixed/YourPlugin/Vendor/Groupone/Marketplace/frontend",
      "mkdir -p vendor-prefixed/YourPlugin/Vendor/Groupone/Marketplace/assets",
      "[ -d vendor/groupone/marketplace/frontend ] && rsync -a vendor/groupone/marketplace/frontend/ vendor-prefixed/YourPlugin/Vendor/Groupone/Marketplace/frontend/ || true",
      "[ -d vendor/groupone/marketplace/assets ] && rsync -a vendor/groupone/marketplace/assets/ vendor-prefixed/YourPlugin/Vendor/Groupone/Marketplace/assets/ || true",
      "[ -d vendor-prefixed/Groupone ] && rm -rf vendor-prefixed/Groupone || true"
    ]
  },
  "config": {
    "allow-plugins": {
      "composer/installers": true
    }
  }
}

Why this works better
- Single tree: Ensures only vendor-prefixed/YourPlugin/Vendor/... exists (no duplicate vendor-prefixed/Groupone).
- Stable autoload: Composer’s own autoloader (vendor/autoload.php) registers PSR-4 and classmap for your prefixed namespace, so it works even if Mozart doesn’t emit its own autoload.php.
- Safer distribution: Prefixed classes won’t clash with other plugins using the same module.

2) Bootstrap in your plugin

In your main plugin file:

// Load Composer autoloader (registers PSR-4/classmap for prefixed deps)
require_once __DIR__ . '/vendor/autoload.php';

// Optionally load Mozart autoload if it exists
$mozart_autoload = __DIR__ . '/vendor-prefixed/autoload.php';
if ( file_exists( $mozart_autoload ) ) {
    require_once $mozart_autoload;
}

// Boot the module (prefers prefixed class)
$prefixed = 'YourPlugin\\Vendor\\Groupone\\Marketplace\\Marketplace';
$original = 'Groupone\\Marketplace\\Marketplace';
$class = class_exists($prefixed) ? $prefixed : (class_exists($original) ? $original : '');
if ($class && is_callable([$class, 'run'])) {
    $class::run([
        'parent_menu_slug' => 'options-general.php',
        'page_title'       => 'Plugin Marketplace',
        'menu_title'       => 'Marketplace',
        'menu_slug'        => 'plugin-marketplace',
        'api_url'          => 'https://example.com/ui-configs',
        // Optionally force assets path if needed
        // 'assets_path'   => __DIR__ . '/vendor-prefixed/YourPlugin/Vendor/Groupone/Marketplace/',
    ]);
}

3) Notes on assets
- The module expects frontend/build assets and optional assets/css, assets/fonts.
- Copy them during Composer post-install/update into your prefixed path.
- If auto-detection fails, pass assets_path to Marketplace::run pointing to the package root under vendor-prefixed/YourPlugin/Vendor/Groupone/Marketplace/.

4) Troubleshooting
- If you see duplicate vendor-prefixed/Groupone, ensure your scripts delete it or that mozart dep_directory is set to the nested YourPlugin/Vendor path.
- If classes don’t load, confirm that vendor/autoload.php is included and that autoload.classmap contains your prefixed directory.
- Run composer dump-autoload -o after changes to autoload config.
