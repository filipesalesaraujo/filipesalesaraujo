<?php

use iThemesSecurity\User_Groups\Matcher;
use Pimple\Container;

return static function ( Container $c ) {
	$c['ITSEC_Dashboard'] = static function ( Container $c ) {
		return new ITSEC_Dashboard( $c[ Matcher::class ] );
	};
};
