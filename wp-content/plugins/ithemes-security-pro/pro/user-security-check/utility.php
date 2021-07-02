<?php

class ITSEC_User_Security_Check_Utility {

	/**
	 * Send a Two-Factor setup reminder.
	 *
	 * @param WP_User      $recipient User to send the reminder to.
	 * @param WP_User|null $requester Person requesting the user setup 2fa. Used to personalize the message.
	 *
	 * @return true|WP_Error
	 */
	public static function send_2fa_reminder( WP_User $recipient, WP_User $requester = null ) {
		$nc   = ITSEC_Core::get_notification_center();
		$mail = $nc->mail();
		$mail->set_recipients( array( $recipient->user_email ) );

		$mail->add_header(
			esc_html__( 'Two Factor Reminder', 'it-l10n-ithemes-security-pro' ),
			sprintf( esc_html__( 'Two Factor Authentication Reminder for %s', 'it-l10n-ithemes-security-pro' ), '<b>' . get_bloginfo( 'name', 'display' ) . '</b>' ),
			true
		);

		$message = ITSEC_Core::get_notification_center()->get_message( 'two-factor-reminder' );
		$message = ITSEC_Lib::replace_tags( $message, array(
			'username'               => $recipient->user_login,
			'display_name'           => $recipient->display_name,
			'requester_username'     => $requester ? $requester->user_login : __( 'administrator', 'it-l10n-ithemes-security-pro' ),
			'requester_display_name' => $requester ? $requester->display_name : __( 'Administrator', 'it-l10n-ithemes-security-pro' ),
			'site_title'             => get_bloginfo( 'name', 'display' ),
		) );
		$mail->add_text( $message );

		$configure_2fa_url = ITSEC_Mail::filter_admin_page_url( add_query_arg( ITSEC_Lib_Login_Interstitial::SHOW_AFTER_LOGIN, '2fa-on-board', ITSEC_Lib::get_login_url() ) );

		$mail->add_button( esc_html__( 'Setup now', 'it-l10n-ithemes-security-pro' ), $configure_2fa_url );

		$mail->add_list( array(
			esc_html__( 'Enabling two-factor authentication greatly increases the security of your user account on this site.', 'it-l10n-ithemes-security-pro' ),
			esc_html__( 'With two-factor authentication enabled, after you login with your username and password, you will be asked for an authentication code before you can successfully log in.', 'it-l10n-ithemes-security-pro' ),
			sprintf(
			/* translators: %1$s and %2$s are opening link tags, %3$s is the closing link tag. */
				esc_html__( '%1$sLearn more about Two Factor Authentication%3$s, or %2$show to set it up%3$s.', 'it-l10n-ithemes-security-pro' ),
				'<a href="' . esc_url( 'https://ithemes.com/2015/07/28/two-factor-authentication/' ) . '">',
				'<a href="' . esc_url( 'https://ithemes.com/2016/07/26/two-factor-authentication-ithemes-security-pro-plugin/' ) . '">',
				'</a>'
			)
		), true );

		$mail->add_user_footer();

		if ( $nc->send( 'two-factor-reminder', $mail ) ) {
			return true;
		}

		return new WP_Error( 'send_failed', __( 'There was a problem sending the E-Mail reminder. Please try again.', 'it-l10n-ithemes-security-pro' ) );
	}
}
