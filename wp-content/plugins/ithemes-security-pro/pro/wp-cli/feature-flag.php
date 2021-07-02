<?php

use WP_CLI\Formatter;

class ITSEC_Feature_Flag_Command extends WP_CLI_Command {

	private $default_fields = [
		'flag',
		'title',
		'status',
		'reason',
		'rate',
		'remote',
	];

	/**
	 * List available feature flags.
	 *
	 * ## OPTIONS
	 *
	 * [--status=<status>]
	 * : Only include flags with a given status.
	 * ---
	 * default: any
	 * options:
	 *  - any
	 *  - enabled
	 *  - disabled
	 *
	 * [--field=<field>]
	 * : Prints the value of a single field for each post.
	 *
	 * [--fields=<fields>]
	 * : Limit the output to specific object fields.
	 *
	 * [--format=<format>]
	 * : Render output in a particular format.
	 * ---
	 * default: table
	 * options:
	 *  - table
	 *  - json
	 *  - csv
	 *  - yaml
	 *
	 * @subcommand list
	 */
	public function list_( $args, $assoc_args ) {
		$flags = array_map( [ $this, 'format_flag' ], array_keys( ITSEC_Lib_Feature_Flags::get_available_flags() ) );

		if ( $status = \WP_CLI\Utils\get_flag_value( $assoc_args, 'status', 'any' ) !== 'any' ) {
			$flags = wp_filter_object_list( $flags, [ 'status' => $status ] );
		}

		$assoc_args = wp_parse_args( $assoc_args, [
			'fields' => $this->default_fields,
		] );
		$formatter  = new Formatter( $assoc_args );
		$formatter->display_items( $flags );
	}

	/**
	 * Get a feature flag.
	 *
	 * <flag>
	 * : The flag name.
	 *
	 * [--field=<field>]
	 * : Prints the value of a single field for each post.
	 *
	 * [--fields=<fields>]
	 * : Limit the output to specific object fields.
	 *
	 * [--format=<format>]
	 * : Render output in a particular format.
	 * ---
	 * default: table
	 * options:
	 *  - table
	 *  - json
	 *  - csv
	 *  - yaml
	 */
	public function get( $args, $assoc_args ) {
		list( $flag ) = $args;

		$assoc_args = wp_parse_args( $assoc_args, [
			'fields' => $this->default_fields,
		] );
		$formatter  = new Formatter( $assoc_args );
		$formatter->display_item( $this->format_flag( $flag ) );
	}

	/**
	 * Enable a feature flag.
	 *
	 * <flag>
	 * : The flag name.
	 */
	public function enable( $args ) {
		list( $flag ) = $args;

		if ( ITSEC_Lib_Feature_Flags::is_enabled( $flag ) ) {
			WP_CLI::warning( 'Flag is already enabled.' );

			return;
		}

		ITSEC_Lib_Feature_Flags::enable( $flag );
		WP_CLI::success( 'Enabled flag.' );
	}

	/**
	 * Disable a feature flag.
	 *
	 * <flag>
	 * : The flag name.
	 */
	public function disable( $args ) {
		list( $flag ) = $args;

		if ( ! ITSEC_Lib_Feature_Flags::is_enabled( $flag ) ) {
			WP_CLI::warning( 'Flag is already disabled.' );

			return;
		}

		ITSEC_Lib_Feature_Flags::disable( $flag );
		WP_CLI::success( 'Disabled flag.' );
	}

	/**
	 * Format a flag.
	 *
	 * @param string $flag
	 *
	 * @return array
	 */
	private function format_flag( $flag ) {
		$config = ITSEC_Lib_Feature_Flags::get_flag_config( $flag );

		if ( ! $config ) {
			WP_CLI::error( 'Flag not found.' );
		}

		return [
			'flag'        => $flag,
			'title'       => $config['title'],
			'description' => $config['description'],
			'status'      => ITSEC_Lib_Feature_Flags::is_enabled( $flag ) ? 'enabled' : 'disabled',
			'reason'      => ITSEC_Lib_Feature_Flags::get_reason( $flag )[0],
			'rate'        => $config['rate'],
			'remote'      => $config['remote'],
		];
	}
}

WP_CLI::add_command( 'itsec feature-flag', new ITSEC_Feature_Flag_Command() );
