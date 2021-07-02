<?php

use iThemesSecurity\User_Groups\Upgrader;

class ITSEC_Fingerprinting_Setup {

	public function __construct() {
		add_action( 'itsec_modules_do_plugin_upgrade', array( $this, 'execute_upgrade' ) );
	}

	/**
	 * Execute module upgrade
	 *
	 * @param int $itsec_old_version
	 *
	 * @return void
	 */
	public function execute_upgrade( $itsec_old_version ) {
		if ( $itsec_old_version < 4117 ) {
			$upgrader = ITSEC_Modules::get_container()->get( Upgrader::class );
			ITSEC_Modules::set_setting(
				'fingerprinting',
				'group',
				$upgrader->upgrade_from_min_role(
					ITSEC_Modules::get_setting( 'fingerprinting', 'role' ) ?: 'subscriber'
				)
			);
		}
	}
}

new ITSEC_Fingerprinting_Setup();
