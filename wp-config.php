<?php
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
define('FS_METHOD', 'direct');
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'upwiththelarks');

/** MySQL database username */
define('DB_USER', 'admin');

/** MySQL database password */
define('DB_PASSWORD', 'admin');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '3&[g*]hR@;9?gIA>>XQsm;W#ESeUJkQMPOJXt+Mv+hF1jg{H?EEH2BDd`K^@T8{S');
define('SECURE_AUTH_KEY',  'N2,6![^j/6!kwC+|vZaw#8^y{jZX02kc7xZw(/+Sx1J/ `^4Z2R?XjhU.%GZc5!+');
define('LOGGED_IN_KEY',    'it?L I@-xXhWFy1}=[-BX@WCH|m&cOLNA;[S(N=0e)<QWm8xO^roaDlL/%]^2pl,');
define('NONCE_KEY',        'A wJ5XCfhxlA+8?U/uE MVOsO!RRP%}T<!c)@%UFS2q)h&Ey~P=ON3.jPJwudJAD');
define('AUTH_SALT',        'slNu!Wyvy/h~s.ZU;Qb=vJYm?{x7T~hPxQmT:c>%u_lW^I6%3B9_wpv+QT<R6O:1');
define('SECURE_AUTH_SALT', 'Ew5l4Sc:|!E&sxQs2|,_,[?U~p.R|qx,!~N<vC{qyFhi6h;|h<?-I-%-Mi(zBax{');
define('LOGGED_IN_SALT',   'GW7`D6m6.ip63ToH81,PsB<Q%9B:G>;K|;HGeVL7_}5_(Z|. / cL2gf6iR{H+pk');
define('NONCE_SALT',       '-w{Gw9f4#:a |^O-tjBO8rx8m7BW}Y[OD1hqNPqI=lx-AB*oGzQ.=_mv@&9}9R-|');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
