<?php
$environments = array(
	'development' => 'dev.filipesalesaraujo.online',
	'production' => 'filipesalesaraujo.online',
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
		define('DB_NAME', 'u997469977_bd_dev');
		define('DB_USER', 'u997469977_user_bd_dev');
		define('DB_PASSWORD', ';1Hw#wF;weAk');
		define('DB_HOST', 'localhost');
		define('DB_CHARSET', 'utf8');
		define('DB_COLLATE', '');
		define('WP_DEBUG', true);
		define('WP_CACHE', false);
		break;
	case '':
		define('DB_NAME', 'DBNAME');
		define('DB_USER', 'DBUSER');
		define('DB_PASSWORD', 'PASSWORD');
		define('DB_HOST', 'localhost');
		define('DB_CHARSET', 'utf8');
		define('DB_COLLATE', '');
		define('WP_DEBUG', false);
		define('WP_CACHE', true);
		break;
}
$table_prefix = 'wu997469977p_';
define( 'WP_MEMORY_LIMIT',  '256M' );
if (!defined('ABSPATH'))
	define('ABSPATH', dirname(__FILE__) . '/');
require_once(ABSPATH . 'wp-settings.php');
