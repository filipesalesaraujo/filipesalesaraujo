<?php

/**
 * Class ITSEC_Dashboard_Validator
 */
class ITSEC_Dashboard_Validator extends ITSEC_Validator {

	public function get_id() {
		return 'dashboard';
	}

	protected function sanitize_settings() {
		$this->preserve_setting_if_exists( array( 'disabled_users' ) );
		$this->vars_to_skip_validate_matching_fields[] = 'disabled_users';
		$this->set_previous_if_empty( array( 'migrated' ) );
		$this->sanitize_setting( 'bool', 'migrated', esc_html__( 'Is the event migration complete.', 'it-l10n-ithemes-security-pro' ) );
		$this->sanitize_setting( 'user-groups', 'group', esc_html__( 'User Group', 'it-l10n-ithemes-security-pro' ) );
	}
}

ITSEC_Modules::register_validator( new ITSEC_Dashboard_Validator() );
