<?php

use iThemesSecurity\User_Groups\Matcher;
use Pimple\Container;

return static function ( Container $c ) {
	$c['ITSEC_User_Logging'] = static function ( Container $c ) {
		return new ITSEC_User_Logging( $c[ Matcher::class ] );
	};
};
