<?php

/**
 * Class ITSEC_Fingerprinting_Validator
 */
class ITSEC_Fingerprinting_Validator extends ITSEC_Validator {

	protected function sanitize_settings() {
		$this->vars_to_skip_validate_matching_fields[] = 'role';
		$this->preserve_setting_if_exists( [ 'role' ] );

		$this->sanitize_setting( 'user-groups', 'group', esc_html__( 'Applicable User Groups', 'it-l10n-ithemes-security-pro' ) );
		$this->sanitize_setting( 'bool', 'restrict_capabilities', esc_html__( 'Restrict Capabilities on Unrecognized Sessions', 'it-l10n-ithemes-security-pro' ) );
		$this->sanitize_setting( 'bool', 'session_hijacking_protection', esc_html__( 'Session Hijacking Protection', 'it-l10n-ithemes-security-pro' ) );
		$this->sanitize_setting( 'string', 'maxmind_lite_key', esc_html__( 'MaxMind GeoLite2 API Key', 'it-l10n-ithemes-security-pro' ) );
		$this->sanitize_setting( 'string', 'maxmind_api_user', esc_html__( 'MaxMind API User', 'it-l10n-ithemes-security-pro' ) );
		$this->sanitize_setting( 'string', 'maxmind_api_key', esc_html__( 'MaxMind API Key', 'it-l10n-ithemes-security-pro' ) );
		$this->sanitize_setting( 'string', 'mapbox_access_token', esc_html__( 'Mapbox API Key', 'it-l10n-ithemes-security-pro' ) );
		$this->sanitize_setting( 'string', 'mapquest_api_key', esc_html__( 'MapQuest API Key', 'it-l10n-ithemes-security-pro' ) );
	}

	public function get_id() {
		return 'fingerprinting';
	}
}

ITSEC_Modules::register_validator( new ITSEC_Fingerprinting_Validator() );
