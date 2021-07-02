<?php

final class ITSEC_Two_Factor_Validator extends ITSEC_Validator {
	public function get_id() {
		return 'two-factor';
	}

	protected function sanitize_settings() {
		$deprecated = [
			'protect_user_type',
			'protect_user_type_roles',
			'allow_remember',
			'allow_remember_roles',
			'application_passwords_type',
			'application_passwords_roles',
			'exclude_type',
			'exclude_roles',
		];

		$this->vars_to_skip_validate_matching_fields = $deprecated;
		$this->preserve_setting_if_exists( $deprecated );
		$this->set_previous_if_empty( [ 'remember_group' ] );

		if ( $this->sanitize_setting( 'string', 'available_methods', esc_html__( 'Authentication Methods Available to Users', 'it-l10n-ithemes-security-pro' ) ) ) {
			$this->sanitize_setting( array_keys( $this->get_available_methods() ), 'available_methods', esc_html__( 'Authentication Methods Available to Users', 'it-l10n-ithemes-security-pro' ) );
		}

		if ( $this->sanitize_setting( 'array', 'custom_available_methods', esc_html__( 'Select Available Providers', 'it-l10n-ithemes-security-pro' ) ) ) {
			$this->sanitize_setting( array_keys( $this->get_methods() ), 'custom_available_methods', esc_html__( 'Select Available Providers', 'it-l10n-ithemes-security-pro' ) );
		}

		$this->sanitize_setting( 'user-groups', 'protect_user_group', esc_html__( 'User Type Protection', 'it-l10n-ithemes-security-pro' ) );
		$this->sanitize_setting( 'user-groups', 'remember_group', esc_html__( 'Allow Remembering Device', 'it-l10n-ithemes-security-pro' ) );

		$this->sanitize_setting( 'bool', 'protect_vulnerable_users', esc_html__( 'Vulnerable User Protection', 'it-l10n-ithemes-security-pro' ) );
		$this->sanitize_setting( 'bool', 'protect_vulnerable_site', esc_html__( 'Vulnerable Site Protection', 'it-l10n-ithemes-security-pro' ) );
		$this->sanitize_setting( 'bool', 'disable_first_login', esc_html__( 'Disable on First Login', 'it-l10n-ithemes-security-pro' ) );
		$this->sanitize_setting( 'non-empty-text', 'on_board_welcome', esc_html__( 'On-board Welcome Text', 'it-l10n-ithemes-security-pro' ) );

		$this->sanitize_setting( 'user-groups', 'application_passwords_group', esc_html__( 'Application Passwords', 'it-l10n-ithemes-security-pro' ) );
		$this->sanitize_setting( 'user-groups', 'exclude_group', esc_html__( 'Disable Forced Two-Factor Authentication for Certain Users', 'it-l10n-ithemes-security-pro' ) );
	}

	public function get_available_methods() {
		$types = array(
			'all'       => esc_html__( 'All Methods (recommended)', 'it-l10n-ithemes-security-pro' ),
			'not_email' => esc_html__( 'All Except Email', 'it-l10n-ithemes-security-pro' ),
			'custom'    => esc_html__( 'Select Methods Manually', 'it-l10n-ithemes-security-pro' ),
		);

		return $types;
	}

	public function get_methods() {
		require_once( dirname( __FILE__ ) . '/class-itsec-two-factor-helper.php' );
		$helper = ITSEC_Two_Factor_Helper::get_instance();

		return $helper->get_all_provider_instances();
	}
}

ITSEC_Modules::register_validator( new ITSEC_Two_Factor_Validator() );
