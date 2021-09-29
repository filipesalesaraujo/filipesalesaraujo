<?php
function theme_enqueue_script()
{
  $versionBundle = '0.0.1';
  $versionStyleJs = '0.0.1';

  wp_deregister_script('jquery');
  wp_enqueue_script('bundle-js', get_template_directory_uri() . '/assets/dist/bundle.min.js', array(), $versionBundle, true);
  wp_enqueue_script('style-js', get_template_directory_uri() . '/assets/dist/style.min.js', array(), $versionStyleJs, true);
}
add_action('wp_enqueue_scripts', 'theme_enqueue_script');