<?php 

function add_styles_and_scripts()
{
    wp_enqueue_script('jquery', get_template_directory_uri() . '/assets/dist/js/app.min.js', array('jquery'), '1.0.0', true);
    wp_enqueue_style('style', get_template_directory_uri() . '/assets/dist/css/app.min.css', array(), '1.0.0', 'all');
}
add_action('wp_enqueue_scripts', 'add_styles_and_scripts');