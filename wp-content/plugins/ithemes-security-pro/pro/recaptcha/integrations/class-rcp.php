<?php

final class ITSEC_Recaptcha_Integration_RCP {

	/** @var ITSEC_Recaptcha */
	private $recaptcha;

	/** @var array */
	private $settings;

	/**
	 * ITSEC_Recaptcha_Integration_RCP constructor.
	 *
	 * @param ITSEC_Recaptcha $recaptcha
	 */
	public function __construct( ITSEC_Recaptcha $recaptcha ) {
		$this->recaptcha = $recaptcha;
		$this->settings  = ITSEC_Modules::get_settings( 'recaptcha' );
	}

	public function run() {
		add_action( 'init', array( $this, 'setup' ), 0 );
	}

	/**
	 * Setup hooks to enable Recaptchas in Lifter LMS login and register forms.
	 */
	public function setup() {
		if ( $this->settings['register'] ) {
			add_filter( 'rcp_is_recaptcha_enabled', '__return_false' );
			add_action( 'admin_enqueue_scripts', static function ( $hook ) {
				if ( $hook === $GLOBALS['rcp_settings_page'] ) {
					wp_add_inline_style( 'common', '.rcp-settings-recaptcha-group { display: none; }' );
				}
			} );
		}

		if ( is_user_logged_in() ) {
			return;
		}

		if ( empty( $this->settings['site_key'] ) || empty( $this->settings['secret_key'] ) || 'v3' !== $this->settings['type'] ) {
			return;
		}

		if ( $this->settings['login'] ) {
			add_action( 'rcp_login_form_fields_before_submit', [ $this, 'add_to_login_form' ] );
		}

		if ( $this->settings['register'] ) {
			remove_action( 'rcp_before_registration_submit_field', 'rcp_show_captcha', 100 );
			remove_action( 'rcp_before_stripe_checkout_submit_field', 'rcp_show_captcha', 100 );
			remove_action( 'rcp_form_errors', 'rcp_validate_captcha' );

			add_action( 'rcp_before_registration_submit_field', [ $this, 'add_to_register_form' ], 100 );
			add_action( 'rcp_before_stripe_checkout_submit_field', [ $this, 'add_to_register_form' ], 100 );
			add_action( 'rcp_form_errors', [ $this, 'validate_register_form' ] );
		}

		if ( $this->settings['reset_pass'] ) {
			add_action( 'rcp_lostpassword_form_fields_before_submit', [ $this, 'add_to_reset_pass_form' ] );
			add_action( 'rcp_retrieve_password_form_errors', [ $this, 'validate_reset_pass_form' ] );
		}
	}

	/**
	 * Displays the reCAPTCHA on the login form.
	 */
	public function add_to_login_form() {
		$this->recaptcha->show_recaptcha( [ 'action' => ITSEC_Recaptcha::A_LOGIN ] );
	}

	/**
	 * Display the reCAPTCHA on the registration form.
	 */
	public function add_to_register_form() {
		$this->recaptcha->show_recaptcha( [ 'action' => ITSEC_Recaptcha::A_REGISTER, 'controlled' => true ] );
		wp_add_inline_script( 'itsec-recaptcha-script', <<<'JS'
window.rcpRegistrationChecks = window.rcpRegistrationChecks || [];
window.rcpRegistrationChecks.push(function($form) {
	return new Promise(function(resolve) {
		window.itsecRecaptcha.v3.onLoad(function() {
			window.itsecRecaptcha.v3.execute('register', function(token) {
				window.itsecRecaptcha.v3.addTokenToForm(token, $form);
				resolve();
			});
		});
	});
});
JS
		);
	}

	/**
	 * Validates the registration form.
	 *
	 * @param array $data
	 */
	public function validate_register_form( $data ) {
		if ( ! empty( $data['validate_only'] ) ) {
			return;
		}

		$args = [ 'action' => ITSEC_Recaptcha::A_REGISTER ];

		if ( has_filter( 'rcp_recaptcha_score_threshold' ) ) {
			$args['v3_threshold'] = apply_filters( 'rcp_recaptcha_score_threshold', 0.5 );
		}

		$validated = $this->recaptcha->validate_captcha( $args );

		if ( is_wp_error( $validated ) ) {
			rcp_errors()->add( 'invalid_recaptcha', $validated->get_error_message(), 'register' );
		}
	}

	/**
	 * Adds the recaptcha to the reset password form.
	 */
	public function add_to_reset_pass_form() {
		$this->recaptcha->show_recaptcha( [ 'action' => ITSEC_Recaptcha::A_RESET_PASS ] );
	}

	/**
	 * Validates the reset password form.
	 */
	public function validate_reset_pass_form() {
		$validated = $this->recaptcha->validate_captcha( [ 'action' => ITSEC_Recaptcha::A_RESET_PASS ] );

		if ( is_wp_error( $validated ) ) {
			rcp_errors()->add( $validated->get_error_code(), $validated->get_error_message() );
		}
	}
}
