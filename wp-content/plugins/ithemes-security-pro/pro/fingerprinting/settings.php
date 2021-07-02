<?php

/**
 * Class ITSEC_Fingerprinting_Settings
 */
class ITSEC_Fingerprinting_Settings extends ITSEC_Settings {
	public function get_id() {
		return 'fingerprinting';
	}

	public function get_defaults() {
		return array(
			'group'                        => ITSEC_Modules::get_settings_obj( 'user-groups' )->get_groups_for_all_users(),
			'restrict_capabilities'        => false,
			'session_hijacking_protection' => false,
			'maxmind_lite_key'             => '',
			'maxmind_api_user'             => '',
			'maxmind_api_key'              => '',
			'mapbox_access_token'          => '',
			'mapquest_api_key'             => '',
		);
	}
}

ITSEC_Modules::register_settings( new ITSEC_Fingerprinting_Settings() );
