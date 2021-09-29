<?php
function theme_enqueue_style()
{
  $versionStyle = '0.0.1';
  
  wp_enqueue_style('style', get_template_directory_uri() . '/assets/dist/style.min.css', array(), $versionStyle, 'all');
}
add_action('wp_enqueue_scripts', 'theme_enqueue_style');
