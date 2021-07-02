<?php

use iThemesSecurity\User_Groups\Matcher;

return static function ( \Pimple\Container $c ) {
	$c['ITSEC_HIBP'] = static function ( \Pimple\Container $c ) {
		return new ITSEC_HIBP( $c[ Matcher::class ] );
	};
};
