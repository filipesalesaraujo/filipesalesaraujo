<?php

use iThemesSecurity\User_Groups\Upgrader;
use iThemesSecurity\User_Groups\User_Group;

class ITSEC_Dashboard_Setup implements \iThemesSecurity\Contracts\Runnable {
	public function run() {
		add_action( 'itsec_modules_do_plugin_upgrade', [ $this, 'on_upgrade' ] );
	}

	/**
	 * Runs the upgrade routine.
	 *
	 * @param int $itsec_old_version
	 */
	public function on_upgrade( $itsec_old_version ) {
		if ( $itsec_old_version < 4117 ) {
			$upgrader       = ITSEC_Modules::get_container()->get( Upgrader::class );
			$disabled_users = ITSEC_Modules::get_setting( 'dashboard', 'disabled_users' );
			$user_group_ids = [ ITSEC_Modules::get_settings_obj( 'user-groups' )->get_default_group_id( 'administrator' ) ];

			if ( $disabled_users ) {
				$user_group = $upgrader->find_or_create( __( 'Dashboard Owners', 'it-l10n-ithemes-security-pro' ), static function ( User_Group $user_group ) use ( $disabled_users ) {
					$users = ITSEC_Lib_Canonical_Roles::get_users_with_canonical_role( 'administrator' );

					foreach ( $users as $user ) {
						if ( ! in_array( $user->ID, $disabled_users, false ) && user_can( $user, apply_filters( 'itsec_cap_required', is_multisite() ? 'manage_network_options' : 'manage_options' ) ) ) {
							$user_group->add_user( $user );
						}
					}
				} );

				if ( $user_group->get_users() ) {
					$user_group_ids = [ $user_group->get_id() ];
				} else {
					$user_group_ids = [];
				}
			}

			ITSEC_Modules::set_setting( 'dashboard', 'group', $user_group_ids );
		}
	}
}

( new ITSEC_Dashboard_Setup() )->run();
