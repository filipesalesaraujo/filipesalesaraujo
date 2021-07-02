<?php

require_once( 'class-itsec-recaptcha.php' );
require_once( dirname( __FILE__ ) . '/API.php' );
$itsec_recaptcha = new ITSEC_Recaptcha();
$itsec_recaptcha->run();

if ( function_exists( 'WC' ) ) {
	require_once( dirname( __FILE__ ) . '/integrations/class-woocommerce.php' );
	$woocommerce = new ITSEC_Recaptcha_Integration_WooCommerce( $itsec_recaptcha );
	$woocommerce->run();
}

if ( class_exists( LifterLMS::class ) ) {
	require_once( dirname( __FILE__ ) . '/integrations/class-lifterlms.php' );
	$lifter = new ITSEC_Recaptcha_Integration_LifterLMS( $itsec_recaptcha );
	$lifter->run();
}

if ( function_exists( 'restrict_content_pro' ) ) {
	require_once( dirname( __FILE__ ) . '/integrations/class-rcp.php' );
	$rcp = new ITSEC_Recaptcha_Integration_RCP( $itsec_recaptcha );
	$rcp->run();
}
