<?php

class ITSEC_Dashboard_Widget_Validator extends ITSEC_Validator {
	public function get_id() {
		return 'dashboard-widget';
	}

	protected function sanitize_settings() {
		$this->preserve_setting_if_exists( [ 'version', 'nag_dismissed' ] );
		$this->vars_to_skip_validate_matching_fields = [ 'version', 'nag_dismissed' ];
	}
}

ITSEC_Modules::register_validator( new ITSEC_Dashboard_Widget_Validator() );
