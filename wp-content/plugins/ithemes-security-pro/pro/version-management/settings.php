<?php

final class ITSEC_Version_Management_Settings extends ITSEC_Settings {
	public function get_id() {
		return 'version-management';
	}

	public function get_defaults() {
		return array(
			'wordpress_automatic_updates'  => false,
			'plugin_automatic_updates'     => 'none',
			'theme_automatic_updates'      => 'none',
			'packages'                     => array(),
			'strengthen_when_outdated'     => false,
			'scan_for_old_wordpress_sites' => false,
			'update_details'               => array(),
			'is_software_outdated'         => false,
			'old_site_details'             => array(),
			'first_seen'                   => array( 'plugin' => array(), 'theme' => array() ),
			'update_if_vulnerable'         => false,
		);
	}

	public function load() {
		parent::load();

		if ( ITSEC_Lib::is_wp_version_at_least( '5.6' ) ) {
			$this->settings['wordpress_automatic_updates'] = get_site_option( 'auto_update_core_major' ) === 'enabled';
		}
	}

	protected function handle_settings_changes( $old_settings ) {
		if (
			ITSEC_Lib::is_wp_version_at_least( '5.6' ) &&
			$this->settings['wordpress_automatic_updates'] !== $old_settings['wordpress_automatic_updates']
		) {
			update_site_option( 'auto_update_core_major', $this->settings['wordpress_automatic_updates'] ? 'enabled' : 'unset' );
		}

		$s = ITSEC_Core::get_scheduler();

		if ( $old_settings['scan_for_old_wordpress_sites'] !== $this->settings['scan_for_old_wordpress_sites'] ) {
			if ( $this->settings['scan_for_old_wordpress_sites'] ) {
				$s->schedule( ITSEC_Scheduler::S_DAILY, 'old-site-scan' );
			} else {
				$s->unschedule( 'old-site-scan' );
			}
		}

		if ( $old_settings['strengthen_when_outdated'] !== $this->settings['strengthen_when_outdated'] ) {
			if ( $this->settings['strengthen_when_outdated'] ) {
				$s->schedule( ITSEC_Scheduler::S_DAILY, 'outdated-software' );
			} else {
				$s->unschedule( 'outdated-software' );
			}
		}
	}
}

ITSEC_Modules::register_settings( new ITSEC_Version_Management_Settings() );
