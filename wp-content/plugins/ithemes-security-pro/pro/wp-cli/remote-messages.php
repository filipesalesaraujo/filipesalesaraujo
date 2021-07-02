<?php

class ITSEC_Remote_Messages_Command {

	/**
	 * Fetches the latest remote messages data.
	 */
	public function fetch() {
		$error = ITSEC_Lib_Remote_Messages::fetch();

		if ( is_wp_error( $error ) ) {
			WP_CLI::error( $error );
		}

		WP_CLI::success( 'Remote messages updated.' );
	}
}

WP_CLI::add_command( 'itsec remote-messages', ITSEC_Remote_Messages_Command::class );
