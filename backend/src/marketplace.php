<?php
namespace Onecom\Marketplace;
use Onecom\Marketplace\Controllers\MarketplaceController;

/**
 * Market Place Embeddable Module
 */


if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class Marketplace {
	/**
	 * Boots the Marketplace with given config.
	 *
	 * @param array $config Configuration options for the marketplace module.
	 */
	public static function run( array $config = [] ) {
		MarketplaceController::boot( $config );
	}
}