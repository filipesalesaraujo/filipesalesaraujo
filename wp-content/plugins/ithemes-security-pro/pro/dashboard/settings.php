<?php

/**
 * Class ITSEC_Dashboard_Settings
 */
class ITSEC_Dashboard_Settings extends ITSEC_Settings {
	public function get_id() {
		return 'dashboard';
	}

	public function get_defaults() {
		return array(
			'migrated' => false,
			'group'    => [
				ITSEC_Modules::get_settings_obj( 'user-groups' )->get_default_group_id( 'administrator' )
			],
		);
	}
}

ITSEC_Modules::register_settings( new ITSEC_Dashboard_Settings() );
