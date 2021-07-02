<?php

class ITSEC_Geolocation_MaxMind_DB_License_Notice implements ITSEC_Admin_Notice {
	public function get_id() {
		return 'geolocation-maxmind-db-license';
	}

	public function get_title() {
		return __( 'Trusted Devices – MaxMind License Required', 'it-l10n-ithemes-security-pro' );
	}

	public function get_message() {
		return sprintf(
			__( 'Due to the CCPA, MaxMind %1$snow requires%2$s a free license key to use their Geolocation API.', 'it-l10n-ithemes-security-pro' ),
			'<a href="https://blog.maxmind.com/2019/12/18/significant-changes-to-accessing-and-using-geolite2-databases/">',
			'</a>'
		);
	}

	public function get_meta() {
		return array(
			'module' => [
				'label'     => esc_html__( 'Module', 'it-l10n-ithemes-security-pro' ),
				'value'     => 'fingerprinting',
				'formatted' => esc_html__( 'Trusted Devices', 'it-l10n-ithemes-security-pro' ),
			],
		);
	}

	public function get_severity() {
		return self::S_ERROR;
	}

	public function show_for_context( ITSEC_Admin_Notice_Context $context ) {
		if ( ! user_can( $context->get_user()->ID, ITSEC_Core::get_required_cap() ) ) {
			return false;
		}

		if ( ! ITSEC_Modules::is_active( 'fingerprinting' ) ) {
			return false;
		}

		ITSEC_Lib::load( 'geolocation' );

		require_once( __DIR__ . '/geolocators/class-itsec-geolocator-maxmind-db.php' );

		if ( ( new ITSEC_Geolocator_MaxMind_DB() )->is_available() ) {
			return false;
		}

		$file = ITSEC_Geolocator_MaxMind_DB::get_db_path();

		if ( ! file_exists( $file ) ) {
			return false;
		}

		return true;
	}

	public function get_actions() {
		return [
			'settings' => new ITSEC_Admin_Notice_Action_Link(
				ITSEC_Core::get_settings_module_url( 'fingerprinting' ),
				esc_html__( 'Update Settings', 'it-l10n-ithemes-security-pro' ),
				ITSEC_Admin_Notice_Action::S_PRIMARY
			)
		];
	}
}

ITSEC_Lib_Admin_Notices::register( new ITSEC_Admin_Notice_Globally_Dismissible( new ITSEC_Geolocation_MaxMind_DB_License_Notice() ) );
