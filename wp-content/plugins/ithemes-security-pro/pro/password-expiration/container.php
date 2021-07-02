<?php

use iThemesSecurity\User_Groups\Matcher;

return static function ( \Pimple\Container $c ) {
	$c['ITSEC_Password_Expiration'] = static function ( \Pimple\Container $c ) {
		return new ITSEC_Password_Expiration( $c[ Matcher::class ] );
	};
};
