<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
// END iThemes Security - Do not modify or remove this line

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ES1wNLE2Styu+4Cvzqte+8q6Afkrnoywatl8hpksLGwZAOaZcuTwv9ZvwLhAY3Th+KOFrTe5vst2PKljMsb4uA==');
define('SECURE_AUTH_KEY',  'GUOGT5Fl1yhm/re+bQlUraVR3y0vRcxyy3SqtpPkw4JHM4l7QQMK/z2jeLHGfx55Qq5w3BhZX8gbTD1Y5e1Eig==');
define('LOGGED_IN_KEY',    '1LTm2/kYU7ob6lYnDu9FFw4fvJJecodwBvHKjGDQerihRnnP2KcoYBlFn5/v6Ps/GUESSthnIS+3mFqCeXROAw==');
define('NONCE_KEY',        '4YoRbPtqeC35oGlriMoh7IVFrOImar7G6c+Yk3Vap9W0Lh4caR+yGkqsbw+BueIAiGfJq/d2LHu83BOn/aXxIA==');
define('AUTH_SALT',        'DYZAPtCruNMm/mH5mT36OcQnX2ccEBFplfcEc+srMXRUi8jVtkdiKxE3/n3+Tc1w3Kp2cvfRrF76tNvvA176+Q==');
define('SECURE_AUTH_SALT', 'dglTlOxecSn5b4TznuYaEzgTvN7M2ShKqY9Nk8zjk0+djyDjz/Ea1D+TA90smny1WcLrtl8mSZ7QSsCzFRpgUA==');
define('LOGGED_IN_SALT',   'n43WBLQQfAmo8vuYrG+vEq0dJK4UlABHGLeQ2VRdhQfBmUvtnQUIBkJbpfoATH+sia6KckTMofynp3fGKXsXQQ==');
define('NONCE_SALT',       'hnfSjUVHAWgZLeVNuTuYcVzlT45jE38dnRnLSJDlkcdNMKCZ9XdCaVgMyWSju8gENh2XEZf3PppG1PsI6UPKnQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
