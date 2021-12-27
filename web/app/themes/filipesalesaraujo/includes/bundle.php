<?php
function theme_enqueue_script()
{
  $versionBundle = '1.20';
  $versionStyleJs = '1.0';
  wp_deregister_script('jquery');
  wp_enqueue_script('bundle-js', get_template_directory_uri() . '/assets/dist/js/bundle.min.js', array(), $versionBundle, true);
  wp_enqueue_script('style-js', get_template_directory_uri() . '/assets/dist/js/style.min.js', array(), $versionStyleJs, true);
}
add_action('wp_enqueue_scripts', 'theme_enqueue_script');