<?php
function remove_menus()
{
    remove_menu_page('plugins.php');                //Plugins /wp/wp-admin/plugins.php
    remove_menu_page('edit-comments.php');          //Comments /wp/wp-admin/edit-comments.php
    // remove_menu_page('options-general.php');        //Settings /wp/wp-admin/options-general.php
    // remove_menu_page('tools.php');                  //Tools /wp/wp-admin/tools.php
    remove_menu_page('users.php');                  //Users /wp/wp-admin/users.php
    remove_menu_page('themes.php');                 //Appearance  /wp/wp-admin/themes.php
}
add_action('admin_menu', 'remove_menus');
add_filter('show_admin_bar', '__return_false');