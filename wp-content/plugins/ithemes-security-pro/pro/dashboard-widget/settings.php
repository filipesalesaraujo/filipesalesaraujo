<?php

class ITSEC_Dashboard_Widget_Settings extends ITSEC_Settings {
	public function get_id() {
		return 'dashboard-widget';
	}

	public function get_defaults() {
		return array();
	}
}

ITSEC_Modules::register_settings( new ITSEC_Dashboard_Widget_Settings() );
