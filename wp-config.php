<?php

$environments = array(
	'development' => '',
	'production' => '',
);
$server_name = $_SERVER['SERVER_NAME'];

foreach ($environments as $key => $env) {
	if (strstr($server_name, $env)) {
		define('ENVIRONMENT', $key);
		break;
	}
}

if (!defined('ENVIRONMENT')) define('ENVIRONMENT', 'production');
switch (ENVIRONMENT) {

	case '':
		define('DB_NAME', 'DBNAME');
		define('DB_USER', 'DBUSER');
		define('DB_PASSWORD', 'PASSWORD');
		define('DB_HOST', 'localhost');
		define('WP_SITEURL', '');
		define('WP_HOME', '');
		define('WP_DEBUG', true);
		define('WP_CACHE', false);
		break;

	case '':
		define('DB_NAME', 'DBNAME');
		define('DB_USER', 'DBUSER');
		define('DB_PASSWORD', 'PASSWORD');
		define('DB_HOST', '');
		define('DB_HOST_SLAVE', '');
		define('DB_CHARSET', 'utf8');
		define('DB_COLLATE', 'utf8_unicode_ci');
		define('WP_SITEURL', '');
		define('WP_HOME', '/');
		define('WP_DEBUG', false);
		define('WP_CACHE', TRUE);
		break;
}

if (!defined('DB_NAME')) define('DB_NAME', 'DBNAME');
if (!defined('DB_USER')) define('DB_USER', 'DBUSER');
if (!defined('DB_PASSWORD')) define('DB_PASSWORD', 'PASSWORD');
if (!defined('DB_HOST')) define('DB_HOST', '');
if (!defined('DB_HOST_SLAVE')) define('DB_HOST_SLAVE', '');
if (!defined('DB_CHARSET')) define('DB_CHARSET', 'utf8');
if (!defined('DB_COLLATE')) define('DB_COLLATE', 'utf8_unicode_ci');
if (!defined('WP_SITEURL')) define('WP_SITEURL', '');
if (!defined('WP_HOME')) define('WP_HOME', '');
if (!defined('WP_DEBUG')) define('WP_DEBUG', false);
if (!defined('WP_CACHE')) define('WP_CACHE', TRUE);

$table_prefix = 'wp_';

define('AUTH_KEY',         'coloque a sua frase única aqui');
define('SECURE_AUTH_KEY',  'coloque a sua frase única aqui');
define('LOGGED_IN_KEY',    'coloque a sua frase única aqui');
define('NONCE_KEY',        'coloque a sua frase única aqui');
define('AUTH_SALT',        'coloque a sua frase única aqui');
define('SECURE_AUTH_SALT', 'coloque a sua frase única aqui');
define('LOGGED_IN_SALT',   'coloque a sua frase única aqui');
define('NONCE_SALT',       'coloque a sua frase única aqui');

if (!defined('ABSPATH'))
	define('ABSPATH', dirname(__FILE__) . '/');
require_once(ABSPATH . 'wp-settings.php');
