# Marketplace Module

A reusable WordPress plugin module for managing and displaying a marketplace of plugins with React frontend and PHP backend. Designed to be easily integrated into other plugins while providing install/activate functionality and REST API support.

---

## Features

- **React-based frontend** for displaying plugin listings.
- **Backend PHP controller & model** for handling API requests, install/activate actions.
- **Supports WordPress admin and frontend usage**.
- **REST API endpoint** for fetching plugin list.
- **Flexible CSS loading** – custom or default styles.
- **Composer-ready** with PSR-4 autoloading.
- **Reusable by other plugin developers** with minimal setup.

---
## Usage (Inside WordPress)


## Installation

### Using Composer

1. Add your Marketplace module as a Composer dependency in composer.json of your plugin:

```bash

{
"require": {
    "Groupone/marketplace-module": "1.0.0"
  },
  "repositories": [
    {
      "type": "vcs",
      "url": "git@gitlab.group.one:wp-in/marketplace.git"
    }
  ]
}
````
2. composer install

3. Require the module in your plugin and boot it:

```php
require_once __DIR__ . '/vendor/autoload.php';

\Onecom\Marketplace\Marketplace::class::run([
    'parent_menu_slug' => '', // menu slug under which the module should appear
    'page_title' => 'Plugin Marketplace',
    'menu_title' => 'Marketplace',
    'menu_slug'  => 'plugin-marketplace',
    'api_url'    => '',           // Optional, external API if needed
    'custom_css' => '',           // Optional, path to custom CSS
]);
````
4. The module will:


	• Register a submenu page under the WordPress admin menu.
	• Enqueue the React frontend automatically.
	• Localize marketplaceConfig for use in React.
	• Register REST API endpoint at /wp-json/marketplace/v1/plugins.
