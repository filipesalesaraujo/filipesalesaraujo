<?php
$template_diretorio = get_template_directory();
require_once($template_diretorio . "/includes/bundle.php");
require_once($template_diretorio . "/includes/logo.php");
require_once($template_diretorio . "/includes/menu.php");
require_once($template_diretorio . "/includes/style.php");
require_once($template_diretorio . "/includes/thumbnail.php");

function remove_menus()
{
    remove_menu_page('plugins.php');
    // Url: /wp/wp-admin/plugins.php
    
}
add_action('admin_menu', 'remove_menus');
