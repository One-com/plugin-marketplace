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
"YourVendor\\YourPlugin\\": "src/"
}
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
"php vendor/bin/mozart compose",
"rsync -a vendor/groupone/marketplace/frontend/build/ vendor-prefixed/Groupone/Marketplace/frontend/build/ || true",
"rsync -a vendor/groupone/marketplace/assets/css/ vendor-prefixed/Groupone/Marketplace/assets/css/ || true",
"rsync -a vendor/groupone/marketplace/assets/fonts/ vendor-prefixed/Groupone/Marketplace/assets/fonts/ || true",
"composer dump-autoload -o"
],
"post-update-cmd": [
"php vendor/bin/mozart compose",
"rsync -a vendor/groupone/marketplace/frontend/build/ vendor-prefixed/Groupone/Marketplace/frontend/build/ || true",
"rsync -a vendor/groupone/marketplace/assets/css/ vendor-prefixed/Groupone/Marketplace/assets/css/ || true",
"rsync -a vendor/groupone/marketplace/assets/fonts/ vendor-prefixed/Groupone/Marketplace/assets/fonts/ || true",
"composer dump-autoload -o"
]
}
}

2) Run Mozart to prefix and copy assets into your plugin

composer install

3) Bootstrap the module in your plugin code

require_once __DIR__ . '/vendor-prefixed/autoload.php';

// using Mozart-prefixed classes
\YourPlugin\Vendor\Groupone\Marketplace\Marketplace::run([
'parent_menu_slug' => 'your-menu-slug',
'page_title'       => 'Plugin Marketplace',
'menu_title'       => 'Marketplace',
'menu_slug'        => 'plugin-marketplace',
'api_url'          => 'https://example.com/marketplace.json',
// Optional: Explicitly set assets path if auto-detection doesn't work
// 'assets_path'      => __DIR__ . '/vendor-prefixed/Groupone/Marketplace/',
]);

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

---

## Assets Path Configuration

- Explicit: Pass assets_path in the config. Example:

\Groupone\Marketplace\Marketplace::run([
  'assets_path' => WP_PLUGIN_DIR . '/your-plugin/vendor-prefixed/'
]);


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
