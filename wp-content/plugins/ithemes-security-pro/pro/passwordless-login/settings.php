<?php

final class ITSEC_Passwordless_Login_Settings extends ITSEC_Settings {
	public function get_id() {
		return 'passwordless-login';
	}

	public function get_defaults() {
		return array(
			'group'            => ITSEC_Modules::get_settings_obj( 'user-groups' )->get_groups_for_all_users(),
			'availability'     => 'enabled',
			'2fa_bypass_group' => [],
			'flow'             => 'method-first',
			'integrations'     => array(),
		);
	}
}

ITSEC_Modules::register_settings( new ITSEC_Passwordless_Login_Settings() );
