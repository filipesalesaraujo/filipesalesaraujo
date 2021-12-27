<?php
$template_diretorio = get_template_directory();
require_once($template_diretorio . "/includes/bundle.php");
require_once($template_diretorio . "/includes/logo.php");
require_once($template_diretorio . "/includes/menu.php");
require_once($template_diretorio . "/includes/style.php");
require_once($template_diretorio . "/includes/thumbnail.php");

function remove_menus()
{
    remove_menu_page('plugins.php');                //Plugins /wp/wp-admin/plugins.php
    remove_menu_page('edit-comments.php');          //Comments /wp/wp-admin/edit-comments.php
    remove_menu_page('options-general.php');        //Settings /wp/wp-admin/options-general.php
    remove_menu_page('tools.php');                  //Tools /wp/wp-admin/tools.php
    remove_menu_page('users.php');                  //Users /wp/wp-admin/users.php
}
add_action('admin_menu', 'remove_menus');
