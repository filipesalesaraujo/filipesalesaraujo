<?php
function theme_enqueue_style()
{
  $versionStyle = '1.3';
  wp_enqueue_style('style', get_template_directory_uri() . '/assets/dist/css/style.min.css', array(), $versionStyle, 'all');
}
add_action('wp_enqueue_scripts', 'theme_enqueue_style');
