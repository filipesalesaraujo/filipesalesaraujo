<?php

use iThemesSecurity\Ban_Hosts\Multi_Repository;
use iThemesSecurity\Ban_Hosts\Repository_Ban;
use iThemesSecurity\Ban_Hosts\Filters;
use function WP_CLI\Utils\get_flag_value;

class ITSEC_Ban_Command {
	const FIELDS = [
		'id',
		'source',
		'ban',
		'created_by',
		'created_at',
		'comment',
	];

	/** @var iThemesSecurity\Ban_Hosts\Multi_Repository */
	private $repository;

	/**
	 * ITSEC_Ban_Command constructor.
	 *
	 * @param Multi_Repository $repository
	 */
	public function __construct( Multi_Repository $repository ) { $this->repository = $repository; }

	/**
	 * Registers the WP CLI commands for bans.
	 */
	public function register_commands() {
		WP_CLI::add_command( 'itsec ban check', [ $this, 'check' ] );
		WP_CLI::add_command( 'itsec ban get', [ $this, 'get' ] );

		$this->make_list_command( 'itsec ban list all', '' );

		foreach ( $this->repository->get_sources() as $source ) {
			$this->make_list_command( "itsec ban list {$source}", $source );

			if ( $this->repository->supports_create( $source ) ) {
				$this->make_create_command( $source );
			}

			if ( $this->repository->supports_update( $source ) ) {
				$this->make_update_command( $source );
			}

			if ( $this->repository->supports_delete( $source ) ) {
				$this->make_delete_command( $source );
			}
		}
	}

	/**
	 * Makes a create command.
	 *
	 * @param string $source
	 */
	protected function make_create_command( $source ) {
		$schema     = $this->repository->get_creation_schema( $source );
		$synopsis   = ITSEC_Lib::convert_schema_to_cli_synopsis( $schema );
		$synopsis[] = [
			'name'        => 'porcelain',
			'type'        => 'flag',
			'optional'    => true,
			'description' => 'Whether to only return the ban id.',
		];

		WP_CLI::add_command(
			"itsec ban create {$source}",
			function ( $args, $assoc_args ) use ( $source ) {
				$schema = $this->repository->get_creation_schema( $source );
				$data   = $assoc_args;
				unset( $data['porcelain'] );

				$arrays = array_keys( array_filter( $schema['properties'], static function ( $schema ) {
					$types = (array) $schema['type'];

					return in_array( 'array', $types, true ) || in_array( 'object', $types, true );
				} ) );
				$data   = \WP_CLI\Utils\parse_shell_arrays( $data, $arrays );

				$error = rest_validate_value_from_schema( $data, $schema );

				if ( is_wp_error( $error ) ) {
					WP_CLI::error( $error );
				}

				$data = rest_sanitize_value_from_schema( $data, $schema );

				if ( is_wp_error( $data ) ) {
					WP_CLI::error( $data );
				}

				try {
					$ban = $this->repository->fill( $source, $data );
					$ban = $this->repository->persist( $ban );
				} catch ( \iThemesSecurity\Exception\Exception $e ) {
					WP_CLI::error( 'Could not create ban: ' . $e->getMessage() );
				}

				if ( get_flag_value( $assoc_args, 'porcelain' ) ) {
					WP_CLI::line( $ban->get_id() );
				} else {
					WP_CLI::success( 'Created ban ' . $ban->get_id() );
				}
			},
			[
				'synopsis'  => $synopsis,
				'shortdesc' => sprintf( 'Creates bans in the %s repository', $source ),
			]
		);
	}

	/**
	 * Makes an update command.
	 *
	 * @param string $source
	 */
	protected function make_update_command( $source ) {
		$schema     = $this->repository->get_update_schema( $source );
		$synopsis   = ITSEC_Lib::convert_schema_to_cli_synopsis( $schema );
		$synopsis[] = [
			'name'        => 'id',
			'type'        => 'positional',
			'optional'    => false,
			'description' => 'The ban id to update.',
		];

		WP_CLI::add_command(
			"itsec ban update {$source}",
			function ( $args, $assoc_args ) use ( $source ) {
				list( $id ) = $args;

				$ban = $this->repository->get( $source, (int) $id );

				if ( ! $ban ) {
					WP_CLI::error( 'Cannot find ban to update.' );
				}

				$schema = $this->repository->get_update_schema( $source );
				$data   = $assoc_args;

				$arrays = array_keys( array_filter( $schema['properties'], static function ( $schema ) {
					$types = (array) $schema['type'];

					return in_array( 'array', $types, true ) || in_array( 'object', $types, true );
				} ) );
				$data   = \WP_CLI\Utils\parse_shell_arrays( $data, $arrays );

				$error = rest_validate_value_from_schema( $data, $schema );

				if ( is_wp_error( $error ) ) {
					WP_CLI::error( $error );
				}

				$data = rest_sanitize_value_from_schema( $data, $schema );

				if ( is_wp_error( $data ) ) {
					WP_CLI::error( $data );
				}

				try {
					$ban = $this->repository->fill( $source, $data, $ban );
					$this->repository->persist( $ban );
				} catch ( \iThemesSecurity\Exception\Exception $e ) {
					WP_CLI::error( 'Could not update ban: ' . $e->getMessage() );
				}

				WP_CLI::success( 'Updated ban.' );
			},
			[
				'synopsis'  => $synopsis,
				'shortdesc' => sprintf( 'Updates bans in the %s repository', $source ),
			]
		);
	}

	/**
	 * Makes a delete command.
	 *
	 * @param string $source
	 */
	protected function make_delete_command( $source ) {
		WP_CLI::add_command(
			"itsec ban delete {$source}",
			function ( $args, $assoc_args ) use ( $source ) {
				list( $id ) = $args;

				try {
					$ban = $this->repository->get( $source, $id );

					if ( ! $ban ) {
						WP_CLI::warning( 'No ban found with the given id.' );
					} else {
						$this->repository->delete( $ban );
					}

					WP_CLI::success( 'Deleted ban.' );
				} catch ( \iThemesSecurity\Exception\Exception $e ) {
					WP_CLI::error( $e->getMessage() );
				}
			},
			[
				'synopsis'  => [
					[
						'name' => 'id',
						'type' => 'positional',
					],
				],
				'shortdesc' => sprintf( 'Deletes bans from the %s repository', $source ),
			]
		);
	}

	/**
	 * Makes the list command.
	 *
	 * @param string $command
	 * @param string $source
	 */
	protected function make_list_command( $command, $source ) {
		$synopsis = [
			[
				'name'        => 'field',
				'type'        => 'assoc',
				'optional'    => true,
				'description' => 'Instead of returning the whole ban, returns the value of a single field.',
			],
			[
				'name'        => 'fields',
				'type'        => 'assoc',
				'optional'    => true,
				'description' => 'Limit the output to specific object fields.',
			],
			[
				'name'        => 'format',
				'type'        => 'assoc',
				'description' => 'Render output in particular format.',
				'default'     => 'table',
				'options'     => [
					'table',
					'json',
					'csv',
					'yaml',
					'ids',
				],
			],
		];

		foreach ( $this->repository->get_supported_filters( $source ) as $filter ) {
			switch ( $filter ) {
				case Filters::ACTOR_TYPE:
				case Filters::ACTOR_IDENTIFIER:
				case Filters::SEARCH:
				case Filters::CREATED_AFTER:
				case Filters::CREATED_BEFORE:
					$synopsis[] = [
						'name'     => $filter,
						'type'     => 'assoc',
						'optional' => true,
					];
					break;
			}
		}

		WP_CLI::add_command(
			$command,
			function ( $args, $assoc_args ) use ( $source ) {
				$filters = new Filters();

				foreach ( $this->repository->get_supported_filters( $source ) as $filter ) {
					switch ( $filter ) {
						case Filters::ACTOR_TYPE:
							if ( $actor_type = get_flag_value( $assoc_args, Filters::ACTOR_TYPE ) ) {
								$filters = $filters->with_actor_type( $actor_type );
							}
							break;
						case Filters::ACTOR_IDENTIFIER:
							if ( $actor_identifier = get_flag_value( $assoc_args, Filters::ACTOR_IDENTIFIER ) ) {
								$filters = $filters->with_actor_identifier( $actor_identifier );
							}
							break;
						case Filters::SEARCH:
							if ( $comment = get_flag_value( $assoc_args, Filters::SEARCH ) ) {
								$filters = $filters->with_search( $comment );
							}
							break;
						case Filters::CREATED_AFTER:
							if ( $created_after = get_flag_value( $assoc_args, Filters::CREATED_AFTER ) ) {
								$filters = $filters->with_created_after( new \DateTimeImmutable( $created_after, new \DateTimeZone( 'UTC' ) ) );
							}
							break;
						case Filters::CREATED_BEFORE:
							if ( $created_before = get_flag_value( $assoc_args, Filters::CREATED_BEFORE ) ) {
								$filters = $filters->with_created_before( new \DateTimeImmutable( $created_before, new \DateTimeZone( 'UTC' ) ) );
							}
							break;
					}
				}

				$result    = $this->repository->get_bans( $filters, null, $source );
				$formatted = array_map( [ $this, 'format_ban' ], $result->get_bans() );

				$formatter = new \WP_CLI\Formatter( $assoc_args, self::FIELDS );
				$formatter->display_items( $formatted );
			},
			[
				'synopsis' => $synopsis,
			]
		);
	}

	/**
	 * Gets a ban.
	 *
	 * ## OPTIONS
	 *
	 * <source>
	 * : The source repository.
	 *
	 * <id>
	 * : The ban id.
	 *
	 * [--field=<field>]
	 * : Instead of returning the whole user group, returns the value of a single field.
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
	 *  - ids
	 *
	 * @param array $args
	 * @param array $assoc_args
	 */
	public function get( $args, $assoc_args ) {
		list( $source, $id ) = $args;

		$ban = $this->repository->get( $source, $id );

		if ( ! $ban ) {
			WP_CLI::error( 'Ban not found.' );
		}

		$formatter = new \WP_CLI\Formatter( $assoc_args, self::FIELDS );
		$formatter->display_item( $this->format_ban( $ban ) );
	}

	/**
	 * Checks if the given IP address is banned.
	 *
	 * ## OPTIONS
	 *
	 * <host>
	 * : The host to check.
	 *
	 * ## EXAMPLES
	 *
	 *     # Check whether the given host is banned; exit status 0 if banned, otherwise 1
	 *     $ wp itsec ban check 127.0.0.1
	 *     $ echo $?
	 *     1
	 *
	 */
	public function check( $args ) {
		list( $host ) = $args;

		if ( ITSEC_Lib::is_ip_banned( $host ) ) {
			WP_CLI::halt( 0 );
		} else {
			WP_CLI::halt( 1 );
		}
	}

	/**
	 * Formats a ban.
	 *
	 * @param Repository_Ban $ban
	 *
	 * @return array
	 */
	protected function format_ban( Repository_Ban $ban ) {
		return [
			'id'         => $ban->get_id(),
			'source'     => $ban->get_source(),
			'ban'        => (string) $ban,
			'created_by' => (string) $ban->get_created_by(),
			'created_at' => $ban->get_created_at() ? $ban->get_created_at()->format( 'Y-m-d H:i:s' ) : '',
			'comment'    => $ban->get_comment(),
		];
	}
}

( new ITSEC_Ban_Command( ITSEC_Modules::get_container()->get( Multi_Repository::class ) ) )->register_commands();
