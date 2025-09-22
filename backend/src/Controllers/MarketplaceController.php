<?php
namespace Onecom\Marketplace\Controllers;

use Onecom\Marketplace\Models\MarketplaceModel;

use WP_REST_Response;
class MarketplaceController {
	protected $config;
	protected $model;

	/**
	 * Create + initialize controller instance.
	 *
	 * @param array $config
	 * @return self
	 */
	public static function boot( array $config = [] ): self {
		$instance = new self( $config );
		$instance->init();
		return $instance;
	}

	public function __construct( array $config ) {
		$this->config = wp_parse_args( $config, [
			'parent_menu_slug' => 'options-general.php',
			'page_title'       => __( 'Plugin Marketplace', 'text-domain' ),
			'menu_title'       => __( 'Marketplace', 'text-domain' ),
			'menu_slug'        => 'plugin-marketplace',
			'api_url'          => '', // default to empty, React can decide
			'css_url'          => '', // ✅ optional
			'css_handle'       => 'marketplace-frontend-style',
		] );

		$this->model = new MarketplaceModel( $this->config['api_url'] );
	}

	/**
	 * Initialize hooks.
	 */
	public function init() {
		if ( is_admin() ) {
			add_action( 'admin_menu', [ $this, 'register_menu' ] );
			add_action( 'wp_ajax_marketplace_install_plugin', [ $this, 'ajax_install_plugin' ] );
			add_action( 'wp_ajax_marketplace_activate_plugin', [ $this, 'ajax_activate_plugin' ] );
			add_action( 'wp_ajax_marketplace_deactivate_plugin', [ $this, 'ajax_deactivate_plugin' ] );
		}

		add_action( 'rest_api_init', [ $this, 'register_rest_routes' ] );
	}

	public function register_menu() {
		add_submenu_page(
			$this->config['parent_menu_slug'],
			$this->config['page_title'],
			$this->config['menu_title'],
			'manage_options',
			$this->config['menu_slug'],
			[ $this, 'render_admin_page' ]
		);
	}

	public function render_admin_page() {
		// ✅ Get base path and URL for this module once
		$base_path = plugin_dir_path( dirname( __DIR__, 2 ) ); // one level up from backend/
		$base_url  = plugin_dir_url( dirname( __DIR__, 2 ) );

		// ✅ Enqueue JS dynamically
		$js_file   = 'frontend/build/index.js';
		$js_path   = $base_path . $js_file;
		$js_url    = $base_url . $js_file;

		wp_enqueue_script(
			'marketplace-frontend',
			$js_url,
			[ 'wp-element' ],
			file_exists( $js_path ) ? filemtime( $js_path ) : '1.0.0',
			true
		);

		// ✅ Enqueue CSS dynamically (custom or default)
		if ( ! empty( $this->config['custom_css'] ) ) {
			wp_enqueue_style( 'marketplace-css', esc_url( $this->config['custom_css'] ), [], '1.0.0' );
		} else {
			$css_file = 'assets/css/one.min.css';
			wp_enqueue_style( 'marketplace-css', $base_url . $css_file, [], '1.0.0' );
		}

		// ✅ Localize JS with config
		wp_localize_script( 'marketplace-frontend', 'marketplaceConfig', [
			'apiBaseUrl' => trailingslashit( rest_url( 'marketplace/v1/plugins' ) ),
			'apiUrl'     => $this->config['api_url'],
			'locale' => get_locale(),
			'useWPHandlers' => true,
			'wpConfig' => [
				'ajax_url' => admin_url( 'admin-ajax.php' ),
				'nonce'    => wp_create_nonce( 'marketplace_nonce' ),
			],
			'enableDefaultStyles' => empty( $this->config['custom_css'] ),
			'assetsBaseUrl' => $base_url,
			'labels'=>array(
				'install' => __('Install', OC_PLUGIN_DOMAIN),
				'installing' => __('Installing', OC_PLUGIN_DOMAIN),
				'activate' => __('Activate', OC_PLUGIN_DOMAIN),
				'deactivate' => __('Deactivate', OC_PLUGIN_DOMAIN),
				'activating' => __('Activating', OC_PLUGIN_DOMAIN),
				'deactivating' => __('Deactivating', OC_PLUGIN_DOMAIN),
				'learnMore' => __('Learn more', OC_PLUGIN_DOMAIN),
				'all' => __('All', OC_PLUGIN_DOMAIN),
				'recommendedPlugins' => __('Recommended plugins', OC_PLUGIN_DOMAIN),
				'discouraged' => __('Discouraged plugins', OC_PLUGIN_DOMAIN),
				'moreDetails' => __('More details', OC_PLUGIN_DOMAIN),
			),
		] );

		echo '<div id="marketplace-root" class="gv-activated"></div>';
	}

	public function register_rest_routes() {
		register_rest_route( 'marketplace/v1', '/plugins', [
			'methods'             => 'GET',
			'callback'            => [ $this, 'get_plugins' ],
			'permission_callback' => '__return_true',
		] );
	}

	public function get_plugins( $request ) {
		$plugins = $this->model->fetch_plugins();

		if ( is_wp_error( $plugins ) ) {
			return new WP_REST_Response( [ 'error' => $plugins->get_error_message() ], 500 );
		}

		// Attach WP state (installed/activated) for both legacy and new shapes
		$add_state = function( $plugin ) {
			if ( empty( $plugin['slug'] ) ) {
				return $plugin;
			}
			$plugin_file = $plugin['slug'] . '/' . $plugin['slug'] . '.php';
			$plugin['installed'] = file_exists( WP_PLUGIN_DIR . '/' . $plugin['slug'] );
			$plugin['activated'] = function_exists('is_plugin_active') ? is_plugin_active( $plugin_file ) : false;
			return $plugin;
		};

		// Handle supported shapes in order of preference:
		// 1) data.sections[].items[] (new shared response)
		// 2) sections[].items[] (alternate shape)
		// 3) data.ui_json (legacy)
		if ( ! empty( $plugins['data']['sections'] ) && is_array( $plugins['data']['sections'] ) ) {
			foreach ( $plugins['data']['sections'] as $si => $section ) {
				if ( empty( $section['items'] ) || ! is_array( $section['items'] ) ) {
					continue;
				}
				$plugins['data']['sections'][$si]['items'] = array_map( $add_state, $section['items'] );
			}
		} elseif ( ! empty( $plugins['sections'] ) && is_array( $plugins['sections'] ) ) {
			foreach ( $plugins['sections'] as $si => $section ) {
				if ( empty( $section['items'] ) || ! is_array( $section['items'] ) ) {
					continue;
				}
				$plugins['sections'][$si]['items'] = array_map( $add_state, $section['items'] );
			}
		} elseif ( ! empty( $plugins['data']['ui_json'] ) && is_array( $plugins['data']['ui_json'] ) ) {
			$plugins['data']['ui_json'] = array_map( $add_state, $plugins['data']['ui_json'] );
		}

		return new WP_REST_Response( $plugins, 200 );
	}

	/**
	 * Install plugin via WP_Upgrader
	 */
	public function ajax_install_plugin() {
		check_ajax_referer( 'marketplace_nonce', 'nonce' );

		if ( ! current_user_can( 'install_plugins' ) ) {
			wp_send_json_error([ 'message' => __( 'Permission denied', 'onecom-wp' ) ]);
		}


		$slug        = sanitize_text_field( $_REQUEST['slug'] ?? '' );
		$download_url = esc_url_raw( $_REQUEST['download_url'] ?? '' );

		if ( empty( $slug ) || empty( $download_url ) ) {
			wp_send_json_error( [ 'message' => __( 'Invalid plugin data.', 'text-domain' ) ] );
		}

		require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';

		$upgrader = new \Plugin_Upgrader( new \Automatic_Upgrader_Skin() );
		$result   = $upgrader->install( $download_url ); // ✅ use URL from React

		if ( is_wp_error( $result ) ) {
			wp_send_json_error( [ 'message' => $result->get_error_message() ] );
		}

		wp_send_json_success([
			'message'   => __( 'Plugin installed successfully', 'onecom-wp' ),
			'installed' => true,
			'activated' => false,
		]);
	}

	/**
	 * Check if plugin is installed.
	 *
	 * @param string $slug Plugin slug if found.
	 * @return boolean
	 */
	private function is_installed( $slug = '' ): bool {
		return file_exists( WP_PLUGIN_DIR . '/' .  $slug  );
	}

	public function ajax_activate_plugin() {
		if ( ! current_user_can( 'activate_plugins' ) ) {
			wp_send_json_error( [ 'message' => __( 'You do not have permission to activate plugins.', 'text-domain' ) ] );
		}

		check_ajax_referer( 'marketplace_nonce', '_wpnonce' );

		$slug = isset( $_REQUEST['slug'] ) ? sanitize_key( wp_unslash( $_REQUEST['slug'] ) ) : '';

		if ( empty( $slug ) ) {
			wp_send_json_error( [ 'message' => __( 'Missing plugin slug.', 'text-domain' ) ] );
		}

		// Load the list of installed plugins
		require_once ABSPATH . 'wp-admin/includes/plugin.php';
		$plugins = get_plugins();

		// Try to find the plugin main file by slug
		$plugin_file = '';
		foreach ( $plugins as $file => $data ) {
			if ( strpos( $file, $slug . '/' ) === 0 || $file === $slug . '.php' ) {
				$plugin_file = $file;
				break;
			}
		}

		if ( empty( $plugin_file ) ) {
			wp_send_json_error( [ 'message' => __( 'Plugin not installed.', 'text-domain' ) ] );
		}

		$result = activate_plugin( $plugin_file );

		if ( is_wp_error( $result ) ) {
			wp_send_json_error( [ 'message' => $result->get_error_message() ] );
		}

		wp_send_json_success( [
			'installed' => true,
			'activated' => true,
			'message'   => __( 'Plugin activated successfully.', 'text-domain' ),
		] );
	}

	public function ajax_deactivate_plugin() {
		check_ajax_referer( 'marketplace_nonce', 'nonce' );

		if ( ! current_user_can( 'activate_plugins' ) ) {
			wp_send_json_error([ 'message' => __( 'Permission denied', 'onecom-wp' ) ]);
		}

		$slug = sanitize_text_field( $_REQUEST['slug'] ?? '' );
		if ( empty( $slug ) ) {
			wp_send_json_error([ 'message' => __( 'Invalid plugin slug', 'onecom-wp' ) ]);
		}

		require_once ABSPATH . 'wp-admin/includes/plugin.php';
		$plugins = get_plugins();

		// Try to find the plugin main file by slug
		$plugin_file = '';
		foreach ( $plugins as $file => $data ) {
			if ( strpos( $file, $slug . '/' ) === 0 || $file === $slug . '.php' ) {
				$plugin_file = $file;
				break;
			}
		}

		deactivate_plugins( $plugin_file, false, is_multisite() );

		if ( is_plugin_active( $plugin_file ) ) {
			wp_send_json_error([ 'message' => __( 'Failed to deactivate plugin', 'onecom-wp' ) ]);
		}

		wp_send_json_success([
			'message'   => __( 'Plugin deactivated successfully', 'onecom-wp' ),
			'installed' => true,
			'activated' => false,
		]);
	}
}