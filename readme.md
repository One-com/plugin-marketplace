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

Example of a complete composer.json (replace `YourPlugin` with your plugin's namespace and path in`copy-assets` where you want to copy assets ):

```json
{
  "name": "your-vendor/your-plugin",
  "type": "wordpress-plugin",
  "require": {
    "php": ">=8.0",
    "groupone/marketplace": "^1.0"
  },
  "repositories": [
    { "type": "vcs", "url": "git@github.com:One-com/wp-marketplace.git" }
  ],
  "require-dev": {
    "coenjacobs/mozart": "^0.7"
  },
  "autoload": {
    "psr-4": {
      "YourPlugin\\Vendor\\": "/inc/Dependencies/YourPlugin/"
    },
    "classmap": [
      "inc/Dependencies/YourPlugin/"
    ]
  },
  "extra": {
    "mozart": {
      "dep_namespace": "YourPlugin\\Dependencies\\",
      "dep_directory": "/inc/Dependencies/YourPlugin/",
      "classmap_directory": "/inc/Dependencies/YourPlugin/",
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
      "mkdir -p inc/Dependencies/YourPlugin/Groupone/Marketplace/frontend",
      "mkdir -p inc/Dependencies/YourPlugin/Groupone/Marketplace/assets",
      "[ -d vendor/groupone/marketplace/frontend ] && rsync -a vendor/groupone/marketplace/frontend/ inc/Dependencies/YourPlugin/Groupone/Marketplace/frontend/ || true",
      "[ -d vendor/groupone/marketplace/assets ] && rsync -a vendor/groupone/marketplace/assets/ inc/Dependencies/YourPlugin/Groupone/Marketplace/assets/ || true"
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

3) Bootstrap the module in your plugin code(replace `YourPlugin` with your plugin's namespace)

```php
// Composer autoloader registers both your plugin classes and the Mozart-prefixed dependencies
require_once __DIR__ . '/vendor/autoload.php';

// Using the Mozart-prefixed class name after Composer autoload is registered
\YourPlugin\Dependencies\Groupone\Marketplace\Marketplace::run([
    'parent_menu_slug' => 'your-menu-slug',
    'page_title'       => 'Plugin Marketplace',
    'menu_title'       => 'Marketplace',
    'menu_slug'        => 'plugin-marketplace',
    'api_url'          => 'https://example.com/marketplace.json',
    'brand'            => 'your_brand_name', // Optional: brand identifier for API filtering
    // Optional: Explicitly set assets path if auto-detection doesn't work
    'assets_path'      => __DIR__ . '/inc/Dependencies/YourPlugin/Groupone/Marketplace/',
]);
```

---

## Configuration Options

- parent_menu_slug: WordPress menu slug under which the module submenu will be added. Default: options-general.php
- page_title: Page title for the Marketplace screen. Default: Plugin Marketplace
- menu_title: Menu title for the submenu. Default: Marketplace
- menu_slug: Slug used for the submenu and page. Default: plugin-marketplace
- api_url: External API endpoint returning marketplace data. Default: ""
- brand: Optional brand identifier used when constructing marketplace API requests. Can be used to filter or customize marketplace content based on brand. Default: ""
- css_url: URL to a custom CSS file that styles the frontend. Default: ""
- css_handle: WordPress style handle when registering/enqueuing styles. Default: marketplace-frontend-style
- assets_path: Filesystem path to the package root containing the frontend/ directory. If empty, the module auto-detects it (see below).
- register_menu: Boolean flag to control automatic menu registration. Set to `false` to skip menu registration when your plugin handles it manually (prevents duplicate menus). Default: true

---

## Assets Path Configuration

- Explicit: Pass assets_path in the config. Example:

```php
\Groupone\Marketplace\Marketplace::run([
  'assets_path' => WP_PLUGIN_DIR . '/your-plugin/inc/Dependencies/YourPlugin/'
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

