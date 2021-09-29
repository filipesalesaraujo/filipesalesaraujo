<?php
function theme_menu()
{
    register_nav_menu('menu', __('Menu'));
}
add_action('init', 'theme_menu');