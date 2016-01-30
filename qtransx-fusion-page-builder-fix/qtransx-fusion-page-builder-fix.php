<?php
namespace Wordpress\Plugins\qtransxFusionFix;
include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

/**
* Plugin Name: qTranslate-x Fusion Page Builder fix
* Plugin URI: http://github.com/alexander-heimbuch/qtransx-fusion-page-builder-fix
* Description: Patches the qTranslate-x integration in the Fusion Core Page Builder
* Version: 1.0
* Author: Alexander Heimbuch
* Author URI: http://aktivstoff.de
**/

function load () {
    if (!is_admin()) {
        return false;
    }

    if (!\is_plugin_active( 'qtranslate-x/qtranslate.php' )) {
        return false;
    }

    if (!is_plugin_active( 'fusion-core/fusion-core.php' )) {
        return false;
    }

    wp_enqueue_script( 'qtrans-fusionfix', plugins_url('qtrans-fusion-fix.js', __FILE__), array('jquery'));
    wp_enqueue_script( 'qtrans-fusionfix' );
}

add_action('init', __NAMESPACE__ . '\\load');
?>
