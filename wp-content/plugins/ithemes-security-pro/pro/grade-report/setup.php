<?php

use iThemesSecurity\User_Groups\Upgrader;
use iThemesSecurity\User_Groups\User_Group;

class ITSEC_Grading_System_Setup {
	public function __construct() {
		add_action( 'itsec_modules_do_plugin_upgrade', array( $this, 'execute_upgrade' ) );
	}

	/**
	 * Execute module upgrade
	 *
	 * @param int $itsec_old_version
	 */
	public function execute_upgrade( $itsec_old_version ) {

		if ( $itsec_old_version < 4102 ) {
			add_action( 'itsec_notification_center_continue_upgrade', array( $this, 'maybe_disable_grade_change' ), 100 );
		}

		if ( $itsec_old_version < 4106 ) {
			$time = get_site_option( 'itsec_grade_report_last_sent' );

			if ( $time ) {
				$last_sent                        = ITSEC_Modules::get_setting( 'notification-center', 'last_sent', array() );
				$last_sent['grade-report-change'] = $time;

				ITSEC_Modules::set_setting( 'notification-center', 'last_sent', $last_sent );
			}

			delete_site_option( 'itsec_grade_report_last_sent' );
		}

		if ( $itsec_old_version < 4117 ) {
			$upgrader       = ITSEC_Modules::get_container()->get( Upgrader::class );
			$disabled_users = ITSEC_Modules::get_setting( 'grade-report', 'disabled_users' );
			$user_group_ids = [ ITSEC_Modules::get_settings_obj( 'user-groups' )->get_default_group_id( 'administrator' ) ];

			if ( $disabled_users ) {
				$user_group = $upgrader->find_or_create( __( 'Grade Report Access', 'it-l10n-ithemes-security-pro' ), static function ( User_Group $user_group ) use ( $disabled_users ) {
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

			ITSEC_Modules::set_setting( 'grade-report', 'group', $user_group_ids );
		}
	}

	public function maybe_disable_grade_change() {
		if ( count( ITSEC_Core::get_notification_center()->get_recipients( 'grade-report-change' ) ) > 1 ) {
			$notifications = ITSEC_Modules::get_setting( 'notification-center', 'notifications' );

			if ( ! empty( $notifications['grade-report-change']['enabled'] ) ) {
				$notifications['grade-report-change']['enabled'] = false;
				ITSEC_Modules::set_setting( 'notification-center', 'notifications', $notifications );
			}
		}
	}
}

new ITSEC_Grading_System_Setup();
