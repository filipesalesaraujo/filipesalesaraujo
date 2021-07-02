<?php

class ITSEC_Passwordless_Login_Validator extends ITSEC_Validator {
	public function get_id() {
		return 'passwordless-login';
	}

	protected function sanitize_settings() {
		$deprecated = [
			'login',
			'roles',
			'2fa_bypass',
			'2fa_bypass_roles',
		];

		$this->vars_to_skip_validate_matching_fields = $deprecated;
		$this->vars_to_skip_validate_matching_fields[] = 'integrations';
		$this->preserve_setting_if_exists( $deprecated );
		$this->set_previous_if_empty( [ 'integrations' ] );

		$this->sanitize_setting( 'user-groups', 'group', __( 'Enable Passwordless Login', 'it-l10n-ithemes-security-pro' ) );

		$this->sanitize_setting( array_keys( $this->get_login_availability_types() ), 'availability', __( 'Passwordless Login Per-User Availability', 'it-l10n-ithemes-security-pro' ) );

		if ( ITSEC_Modules::is_active( 'two-factor' ) ) {
			$this->sanitize_setting( 'user-groups', '2fa_bypass_group', __( 'Allow Two-Factor Bypass for Passwordless Login', 'it-l10n-ithemes-security-pro' ) );
		} else {
			$this->settings['2fa_bypass_group'] = $this->previous_settings['2fa_bypass_group'];
		}

		$this->sanitize_setting( array_keys( $this->get_flow_types() ), 'flow', __( 'Passwordless Login Flow', 'it-l10n-ithemes-security-pro' ) );

		if ( ! $this->sanitize_setting( 'array', 'integrations', __( 'Integrations', 'it-l10n-ithemes-security-pro' ) ) ) {
			return;
		}

		$integrations = $this->settings['integrations'];

		foreach ( $integrations as $slug => $settings ) {
			$settings = array_intersect_key( $settings, array_flip( array( 'enabled' ) ) );

			if ( 'false' === $settings['enabled'] ) {
				$settings['enabled'] = false;
			} elseif ( 'true' === $settings['enabled'] ) {
				$settings['enabled'] = true;
			} else {
				$settings['enabled'] = (bool) $settings['enabled'];
			}

			$this->settings['integrations'][ $slug ] = $settings;
		}
	}

	public function get_login_availability_types() {
		return array(
			'enabled'  => esc_html__( 'Enabled by Default', 'it-l10n-ithemes-security-pro' ),
			'disabled' => esc_html__( 'Disabled by Default', 'it-l10n-ithemes-security-pro' ),
		);
	}

	public function get_flow_types() {
		return array(
			'method-first' => esc_html__( 'Method First', 'it-l10n-ithemes-security-pro' ),
			'user-first'   => esc_html__( 'Username First', 'it-l10n-ithemes-security-pro' )
		);
	}
}

ITSEC_Modules::register_validator( new ITSEC_Passwordless_Login_Validator() );
