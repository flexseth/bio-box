<?php
/**
 * Plugin Name:       Bio Box
 * Description:       Shows a configurable bio box
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Seth Miller
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bio-box
 *
 * @package           bio-box123456
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function bio_box_123456_bio_box_block_init() {
	register_block_type( __DIR__ . '/build' );
	
}
add_action( 'init', 'bio_box_123456_bio_box_block_init' );
