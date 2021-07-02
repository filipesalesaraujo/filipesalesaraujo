<?php
login_header( __( 'Magic Link', 'it-l10n-ithemes-security-pro' ), '', $error );
echo '<form method="post" action="' . esc_url( ITSEC_Lib::get_login_url( ITSEC_Passwordless_Login::ACTION, '', 'login_post' ) ) . '">';
require( __DIR__ . '/prompt-form-fields.php' );

if ( $use_recaptcha ) {
	echo ITSEC_Recaptcha_API::render( array( 'action' => 'login', 'margin' => array( 'top' => 10, 'bottom' => 10 ) ) );
}

require( __DIR__ . '/fallback.php' );
echo '</form>';
login_footer();
