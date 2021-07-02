<?php

/**
 * Interface ITSEC_Two_Factor_Provider_CLI_Configurable
 *
 * Interface for Two-Factor providers that are configurable via WP-CLI.
 */
interface ITSEC_Two_Factor_Provider_CLI_Configurable {

	/**
	 * Configure the Two-Factor method via WP-CLI.
	 *
	 * @param WP_User $user
	 * @param array   $args
	 *
	 * @return void
	 */
	public function configure_via_cli( WP_User $user, array $args );
}
