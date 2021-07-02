<?php

class ITSEC_User_Logging_Validator extends ITSEC_Validator {
	public function get_id() {
		return 'user-logging';
	}

	protected function sanitize_settings() {
		$this->preserve_setting_if_exists( [ 'role' ] );
		$this->sanitize_setting( 'user-groups', 'group', __( 'User Group', 'it-l10n-ithemes-security-pro' ) );
	}
}

ITSEC_Modules::register_validator( new ITSEC_User_Logging_Validator() );
