<?php

use iThemesSecurity\User_Groups\Matcher;
use iThemesSecurity\User_Groups;

/**
 * Class ITSEC_Grading_System_Validator
 */
class ITSEC_Grading_System_Validator extends ITSEC_Validator {
	public function get_id() {
		return 'grade-report';
	}

	protected function sanitize_settings() {
		$this->preserve_setting_if_exists( array( 'disabled_users' ) );
		$this->vars_to_skip_validate_matching_fields[] = 'disabled_users';
		$this->sanitize_setting( 'user-groups', 'group', esc_html__( 'User Group', 'it-l10n-ithemes-security-pro' ) );
	}
}

ITSEC_Modules::register_validator( new ITSEC_Grading_System_Validator() );
