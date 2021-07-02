<?php

use iThemesSecurity\User_Groups\Upgrader;
use iThemesSecurity\User_Groups\User_Group;

class ITSEC_User_Logging_Setup {

	public function __construct() {
		add_action( 'itsec_modules_do_plugin_uninstall', array( $this, 'execute_uninstall' ) );
		add_action( 'itsec_modules_do_plugin_upgrade', array( $this, 'execute_upgrade' ) );
	}

	/**
	 * Execute module uninstall
	 *
	 * @return void
	 */
	public function execute_uninstall() {
		delete_site_option( 'itsec_user_logging' );
	}

	/**
	 * Execute module upgrade
	 *
	 * @param int $itsec_old_version
	 *
	 * @return void
	 */
	public function execute_upgrade( $itsec_old_version ) {
		if ( $itsec_old_version < 4041 ) {
			$current_options = get_site_option( 'itsec_user_logging' );

			// If there are no current options, go with the new defaults by not saving anything
			if ( is_array( $current_options ) ) {
				// Make sure the new module is properly activated or deactivated
				if ( $current_options['enabled'] ) {
					ITSEC_Modules::activate( 'user-logging' );
				} else {
					ITSEC_Modules::deactivate( 'user-logging' );
				}

				ITSEC_Modules::set_settings( 'user-logging', array( 'role' => $current_options['roll'] ) );
			}
		}

		if ( $itsec_old_version < 4117 ) {
			$upgrader = ITSEC_Modules::get_container()->get( Upgrader::class );
			ITSEC_Modules::set_setting(
				'user-logging',
				'group',
				$upgrader->upgrade_from_min_role(
					ITSEC_Modules::get_setting( 'user-logging', 'role' ) ?: 'administrator'
				)
			);
		}
	}
}

new ITSEC_User_Logging_Setup();
