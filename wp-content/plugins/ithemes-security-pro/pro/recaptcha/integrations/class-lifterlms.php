<?php

final class ITSEC_Recaptcha_Integration_LifterLMS {

	/** @var ITSEC_Recaptcha */
	private $recaptcha;

	/** @var array */
	private $settings;

	/**
	 * ITSEC_Recaptcha_Integration_WooCommerce constructor.
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

		if ( is_user_logged_in() ) {
			return;
		}

		if ( empty( $this->settings['site_key'] ) || empty( $this->settings['secret_key'] ) ) {
			return;
		}

		add_action( 'itsec_failed_recaptcha', function ( $error ) {
			add_filter( 'lifterlms_user_login_errors', function () use ( $error ) {
				return $error;
			} );
		} );

		if ( $this->settings['login'] ) {
			add_filter( 'lifterlms_person_login_fields', [ $this, 'add_to_login_form' ] );
		}

		if ( $this->settings['register'] ) {
			add_filter( 'lifterlms_get_person_fields', [ $this, 'add_to_register_form' ], 10, 2 );
			add_filter( 'lifterlms_user_registration_data', [ $this, 'validate_register_form' ], 10, 3 );
		}

		if ( $this->settings['reset_pass'] ) {
			add_filter( 'lifterlms_lost_password_fields', [ $this, 'add_to_reset_pass_form' ] );
			add_filter( 'allow_password_reset', [ $this, 'validate_reset_pass_form' ] );
		}
	}

	/**
	 * Display the recaptcha in the Lifter login form.
	 *
	 * @param array $fields
	 *
	 * @return array
	 */
	public function add_to_login_form( $fields ) {
		$new_fields = [];
		$added      = false;

		$recaptcha_field = [
			'columns'     => 12,
			'id'          => 'itsec_llms_recaptcha',
			'type'        => 'html',
			'description' => $this->recaptcha->get_recaptcha( array( 'action' => ITSEC_Recaptcha::A_LOGIN ) ),
		];

		foreach ( $fields as $field ) {
			if ( $field['id'] === 'llms_login_button' ) {
				$new_fields[] = $recaptcha_field;
				$added        = true;
			}

			$new_fields[] = $field;
		}

		if ( ! $added ) {
			$new_fields[] = $recaptcha_field;
		}

		return $new_fields;
	}

	/**
	 * Display the recaptcha on the registration form on both the account page and during checkout.
	 *
	 * @param array  $fields
	 * @param string $screen
	 *
	 * @return array
	 */
	public function add_to_register_form( $fields, $screen ) {
		if ( $screen === 'registration' || $screen === 'checkout' ) {
			$fields[] = [
				'columns'     => 12,
				'id'          => 'itsec_llms_recaptcha',
				'type'        => 'html',
				'description' => $this->recaptcha->get_recaptcha( array( 'action' => ITSEC_Recaptcha::A_REGISTER ) ),
			];
		}

		return $fields;
	}

	/**
	 * Validate the registration form recaptcha.
	 *
	 * @since 4.1.0
	 *
	 * @param WP_Error $error
	 * @param array    $data
	 * @param string   $screen
	 *
	 * @return \WP_Error
	 */
	public function validate_register_form( $error, $data, $screen ) {

		if ( is_wp_error( $error ) ) {
			return $error;
		}

		if ( 'registration' !== $screen && 'checkout' !== $screen ) {
			return $error;
		}

		$result = $this->recaptcha->validate_captcha( array( 'action' => ITSEC_Recaptcha::A_REGISTER ) );

		if ( is_wp_error( $result ) ) {
			return $result;
		}

		return $error;
	}

	/**
	 * Adds the recaptcha in the Lifter reset password form.
	 *
	 * @param array $fields
	 *
	 * @return array
	 */
	public function add_to_reset_pass_form( $fields ) {
		$new_fields = [];
		$added      = false;

		$recaptcha_field = [
			'columns'     => 12,
			'id'          => 'itsec_llms_recaptcha',
			'type'        => 'html',
			'description' => $this->recaptcha->get_recaptcha( array( 'action' => ITSEC_Recaptcha::A_RESET_PASS ) ),
		];

		foreach ( $fields as $field ) {
			if ( $field['id'] === 'llms_login' ) {
				$new_fields[] = $recaptcha_field;
				$added        = true;
			}

			$new_fields[] = $field;
		}

		if ( ! $added ) {
			$new_fields[] = $recaptcha_field;
		}

		return $new_fields;
	}

	/**
	 * Validates the recaptcha in the reset pass form.
	 *
	 * @param bool|WP_Error $allowed
	 *
	 * @return bool|WP_Error
	 */
	public function validate_reset_pass_form( $allowed ) {
		if ( true !== $allowed ) {
			return $allowed;
		}

		if ( ! empty( $_POST['_lost_password_nonce'] ) && ! empty( $_POST['llms_login'] ) ) {
			$validated = $this->recaptcha->validate_captcha( [ 'action' => ITSEC_Recaptcha::A_RESET_PASS ] );

			if ( is_wp_error( $validated ) ) {
				return $validated;
			}
		}

		return $allowed;
	}
}
