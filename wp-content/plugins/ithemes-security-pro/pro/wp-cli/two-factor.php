<?php

use function WP_CLI\Utils\get_flag_value;

class ITSEC_Two_Factor_User_Method_Command {

	/** @var ITSEC_Two_Factor */
	private $two_factor;

	/** @var ITSEC_Two_Factor_Helper */
	private $helper;

	/**
	 * ITSEC_Two_Factor_User_Method_Command constructor.
	 *
	 * @param ITSEC_Two_Factor        $two_factor
	 * @param ITSEC_Two_Factor_Helper $helper
	 */
	public function __construct( ITSEC_Two_Factor $two_factor, ITSEC_Two_Factor_Helper $helper ) {
		$this->two_factor = $two_factor;
		$this->helper     = $helper;
	}

	/**
	 * Get the primary method for a user.
	 *
	 * ## OPTIONS
	 *
	 * <user_id>
	 * : The user id to retrieve the primary method for.
	 *
	 * @subcommand get-primary
	 */
	public function get_primary( $args ) {
		list( $user_id ) = $args;

		if ( ! $user = get_userdata( $user_id ) ) {
			WP_CLI::error( 'User not found.' );
		}

		$provider = $this->two_factor->get_primary_provider_for_user( $user->ID );

		if ( $provider ) {
			WP_CLI::log( get_class( $provider ) );
		} else {
			WP_CLI::warning( 'No primary provider configured.' );
		}
	}

	/**
	 * Set the primary method for a user.
	 *
	 * ## OPTIONS
	 *
	 * <user_id>
	 * : The user id to set the primary method for.
	 *
	 * <method>
	 * : The method to set as primary.
	 *
	 * @subcommand set-primary
	 */
	public function set_primary( $args ) {
		list( $user_id, $method ) = $args;

		if ( ! $user = get_userdata( $user_id ) ) {
			WP_CLI::error( 'User not found.' );
		}

		$this->assert_enabled_method( $method );

		$enabled = $this->two_factor->set_primary_provider_for_user( $method, $user->ID );

		if ( ! $enabled ) {
			WP_CLI::error( 'Could not set primary Two-Factor method.' );
		}

		WP_CLI::success( 'Updated primary Two-Factor method.' );
	}

	/**
	 * List the enabled Two-Factor methods for a user.
	 *
	 * ## OPTIONS
	 *
	 * <user_id>
	 * : The user id to retrieve methods for.
	 *
	 * [--available]
	 * : Only return available providers. By default all enabled providers will be returned.
	 *
	 * [--include-enforced=<include_enforced>]
	 * : Include enforced methods in the list.
	 *
	 * [--format=<format>]
	 * : Render output in a particular format.
	 * ---
	 * default: csv
	 * options:
	 *   - csv
	 *   - json
	 *   - yaml
	 *   - count
	 * ---
	 *
	 * @subcommand list
	 */
	public function list_( $args, $assoc_args ) {
		list( $user_id ) = $args;
		$format           = get_flag_value( $assoc_args, 'format', 'csv' );
		$include_enforced = get_flag_value( $assoc_args, 'include_enforced', false );
		$available        = get_flag_value( $assoc_args, 'available', false );

		if ( ! $user = get_userdata( $user_id ) ) {
			WP_CLI::error( 'User not found.' );
		}

		if ( $available ) {
			$methods = $this->two_factor->get_available_providers_for_user( $user, $include_enforced );
			$classes = array_map( 'get_class', $methods );
		} else {
			$classes = $this->two_factor->get_enabled_providers_for_user( $user );
		}

		if ( 'count' === $format ) {
			echo count( $format );
		} elseif ( 'csv' === $format ) {
			echo implode( ',', $classes );
		} else {
			WP_CLI::print_value( $classes, [ 'format' => $format ] );
		}
	}

	/**
	 * Enable a Two-Factor method for a user.
	 *
	 * ## OPTIONS
	 *
	 * <user_id>
	 * : The user id to enable the method for.
	 *
	 * <method>
	 * : The method to enable.
	 *
	 * [--reconfigure]
	 * : Optionally force reconfiguration of the method.
	 * By default, a method will only be configured if it has not been configured.
	 *
	 * [--porcelain]
	 * : Only output the configuration result.
	 */
	public function enable( $args, $assoc_args ) {
		list( $user_id, $method ) = $args;
		$reconfigure = get_flag_value( $assoc_args, 'reconfigure' );
		$porcelain   = get_flag_value( $assoc_args, 'porcelain' );

		if ( ! $user = get_userdata( $user_id ) ) {
			WP_CLI::error( 'User not found.' );
		}

		$this->assert_enabled_method( $method );

		$enabled = $this->two_factor->get_enabled_providers_for_user( $user );

		if ( in_array( $method, $enabled, true ) ) {
			WP_CLI::warning( 'Method already enabled.' );

			return;
		}

		$provider = $this->helper->get_provider_instance( $method );

		if ( $provider instanceof ITSEC_Two_Factor_Provider_CLI_Configurable && ( $reconfigure || ! $provider->is_available_for_user( $user ) ) ) {
			$provider->configure_via_cli( $user, $assoc_args );
		}

		$enabled[] = $method;
		$success   = $this->two_factor->set_enabled_providers_for_user( $enabled, $user->ID );

		if ( ! $success ) {
			WP_CLI::error( 'Could not enable method.' );
		}

		if ( ! $porcelain ) {
			WP_CLI::success( sprintf( 'Enabled %s method.', $method ) );
		}
	}

	/**
	 * Disable a Two-Factor method for a user.
	 *
	 * ## OPTIONS
	 *
	 * <user_id>
	 * : The user id to disable the method for.
	 *
	 * <method>
	 * : The method to disable.
	 */
	public function disable( $args ) {
		list( $user_id, $method ) = $args;

		if ( ! $user = get_userdata( $user_id ) ) {
			WP_CLI::error( 'User not found.' );
		}

		$this->assert_enabled_method( $method );

		$enabled = $this->two_factor->get_enabled_providers_for_user( $user );

		if ( ( $i = array_search( $method, $enabled, true ) ) === false ) {
			WP_CLI::warning( 'Method already disabled.' );

			return;
		}

		unset( $enabled[ $i ] );
		$success = $this->two_factor->set_enabled_providers_for_user( array_values( $enabled ), $user->ID );

		if ( ! $success ) {
			WP_CLI::error( 'Could not disable method.' );
		}

		WP_CLI::success( sprintf( 'Disabled %s method.', $method ) );
	}

	/**
	 * Configure a Two-Factor method for a user.
	 *
	 * ## OPTIONS
	 *
	 * <user_id>
	 * : The user id to configure the method for.
	 *
	 * <method>
	 * : The method to configure.
	 *
	 * [--porcelain]
	 * : Only output the configuration result.
	 */
	public function configure( $args, $assoc_args ) {
		list( $user_id, $method ) = $args;

		if ( ! $user = get_userdata( $user_id ) ) {
			WP_CLI::error( 'User not found.' );
		}

		$this->assert_enabled_method( $method );

		$provider = $this->helper->get_provider_instance( $method );

		if ( $provider instanceof ITSEC_Two_Factor_Provider_CLI_Configurable ) {
			$provider->configure_via_cli( $user, $assoc_args );
		}
	}

	/**
	 * Assert that the given Two-Factor method is enabled.
	 *
	 * @param string $method
	 */
	private function assert_enabled_method( $method ) {
		$all     = $this->helper->get_all_providers();
		$enabled = $this->helper->get_enabled_providers();

		if ( ! isset( $all[ $method ] ) ) {
			WP_CLI::error( 'Unknown Two-Factor method.' );
		}

		if ( ! isset( $enabled[ $method ] ) ) {
			WP_CLI::error( 'Two-Factor method is not available.' );
		}
	}
}

WP_CLI::add_command( 'itsec two-factor user method', new ITSEC_Two_Factor_User_Method_Command(
	ITSEC_Two_Factor::get_instance(),
	ITSEC_Two_Factor_Helper::get_instance()
) );

class ITSEC_Two_Factor_User_Remind_Command {

	/**
	 * Send a user an email reminder to setup Two-Factor.
	 *
	 * ## OPTIONS
	 *
	 * <user_id>
	 * : The user to send the reminder to.
	 *
	 * [--requester=<requester>]
	 * : Optionally, specify the user id of the user sending the notification. Used for personalization.
	 *
	 * [--yes]
	 * : Bypass the warning if the given user has already setup Two-Factor.
	 */
	public function __invoke( $args, $assoc_args ) {
		list( $user_id ) = $args;
		$requester = get_flag_value( $assoc_args, 'requester' );

		if ( ! $user = get_userdata( $user_id ) ) {
			WP_CLI::error( 'User not found.' );
		}

		if ( $requester && ! $requester = get_userdata( $requester ) ) {
			WP_CLI::error( 'Requester user not found.' );
		}

		if ( ITSEC_Two_Factor::get_instance()->get_available_providers_for_user( $user, false ) ) {
			WP_CLI::confirm( 'The user already has setup two-factor. Send anyway?' );
		}

		ITSEC_Modules::load_module_file( 'utility.php', 'user-security-check' );

		$sent = ITSEC_User_Security_Check_Utility::send_2fa_reminder( $user, $requester );

		if ( is_wp_error( $sent ) ) {
			WP_CLI::error( $sent );
		}

		WP_CLI::success( 'Sent reminder.' );
	}
}

WP_CLI::add_command( 'itsec two-factor user remind', new ITSEC_Two_Factor_User_Remind_Command() );

class ITSEC_Two_Factor_Method_Command {

	const DEFAULT_FIELDS = [
		'method',
		'status',
	];

	/** @var ITSEC_Two_Factor_Helper */
	private $helper;

	/**
	 * ITSEC_Two_Factor_Method_Command constructor.
	 *
	 * @param ITSEC_Two_Factor_Helper $helper
	 */
	public function __construct( ITSEC_Two_Factor_Helper $helper ) { $this->helper = $helper; }

	/**
	 * List Two-Factor methods.
	 *
	 * ## OPTIONS
	 *
	 * [--status=<status>]
	 * : Only return items with the given status.
	 *
	 * [--field=<field>]
	 * : Prints the value of a single field for each log item.
	 *
	 * [--fields=<fields>]
	 * : Limit the output to specific fields.
	 *
	 * [--format=<format>]
	 * : Render output in a particular format.
	 * ---
	 * default: table
	 * options:
	 *   - table
	 *   - csv
	 *   - ids
	 *   - json
	 *   - count
	 *   - yaml
	 * ---
	 *
	 * @subcommand list
	 */
	public function list_( $args, $assoc_args ) {
		$format  = get_flag_value( $assoc_args, 'format', 'table' );
		$methods = array_map( [ $this, 'format_item' ], array_keys( $this->helper->get_all_providers() ) );

		if ( $status = get_flag_value( $assoc_args, 'status' ) ) {
			$methods = wp_list_filter( $methods, [ 'status' => $status ] );
		}

		if ( 'ids' === $format ) {
			echo implode( ' ', $methods );
		} elseif ( 'count' === $format ) {
			echo count( $methods );
		} else {
			$format_args = wp_parse_args( $assoc_args, [
				'format' => 'table',
				'fields' => self::DEFAULT_FIELDS,
			] );
			$formatter   = new \WP_CLI\Formatter( $format_args );
			$formatter->display_items( $methods );
		}
	}

	/**
	 * Format an item for display.
	 *
	 * @param string $method
	 *
	 * @return array
	 */
	private function format_item( $method ) {
		$enabled = $this->helper->get_enabled_providers();

		return [
			'method' => $method,
			'status' => isset( $enabled[ $method ] ) ? 'enabled' : 'disabled',
		];
	}
}

WP_CLI::add_command( 'itsec two-factor method', new ITSEC_Two_Factor_Method_Command( ITSEC_Two_Factor_Helper::get_instance() ) );
