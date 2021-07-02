<?php

use iThemesSecurity\User_Groups\Match_Target;
use iThemesSecurity\User_Groups\Repository\Repository;
use iThemesSecurity\User_Groups;
use iThemesSecurity\User_Groups\User_Group;
use WP_CLI\Formatter;
use function WP_CLI\Utils\get_flag_value;

class ITSEC_User_Groups_Command {
	/** @var User_Groups\Repository\Repository */
	private $user_groups;

	/** @var string[] */
	private $default_fields;

	/**
	 * ITSEC_User_Groups_Command constructor.
	 *
	 * @param User_Groups\Repository\Repository $user_groups
	 */
	public function __construct( Repository $user_groups ) {
		$this->user_groups    = $user_groups;
		$this->default_fields = [
			'id',
			'label',
			'users',
			'roles',
			'canonical',
		];
	}

	/**
	 * List User Groups.
	 *
	 * ## OPTIONS
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
	 *  - count
	 *
	 * @subcommand list
	 */
	public function list_( $args, $assoc_args ) {
		$user_groups = $this->user_groups->all();

		$format = get_flag_value( $assoc_args, 'format', 'table' );

		if ( 'count' === $format ) {
			WP_CLI::log( count( $user_groups ) );
		} elseif ( 'ids' === $format ) {
			WP_CLI::log( implode( ' ', array_map( static function ( User_Group $user_group ) { return $user_group->get_id(); }, $user_groups ) ) );
		} else {
			$assoc_args = wp_parse_args( $assoc_args, [
				'fields' => $this->default_fields,
			] );

			$formatter = new Formatter( $assoc_args );
			$formatter->display_items( array_map( [ $this, 'format_user_group' ], $user_groups ) );
		}
	}

	/**
	 * Get a user group.
	 *
	 * ## OPTIONS
	 *
	 * <id>
	 * : The id of the user group.
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
	 */
	public function get( $args, $assoc_args ) {
		list( $uuid ) = $args;

		try {
			$user_group = $this->user_groups->get( $uuid );
		} catch ( User_Groups\Repository\User_Group_Not_Found $e ) {
			WP_CLI::error( $e->getMessage() );
		}

		$formatter = new Formatter( $assoc_args, $this->default_fields );
		$formatter->display_item( $this->format_user_group( $user_group ) );
	}

	/**
	 * Get a user group.
	 *
	 * ## OPTIONS
	 *
	 * <id>...
	 * : One or more of the user group ids.
	 */
	public function delete( $args, $assoc_args ) {
		$status = 0;

		foreach ( $args as $id ) {
			try {
				$user_group = $this->user_groups->get( $id );
				$this->user_groups->delete( $user_group );

				WP_CLI::success( sprintf( 'Deleted group %s.', $id ) );
			} catch ( User_Groups\Repository\User_Group_Not_Found $e ) {
				// treat the group already not existing as a success
			} catch ( \Exception $e ) {
				$status = 1;
				WP_CLI::warning( sprintf( 'Could not delete user group %s. Error: %s.', $id, $e->getMessage() ) );
			}
		}

		WP_CLI::halt( $status );
	}

	/**
	 * Create a user group.
	 *
	 * ## OPTIONS
	 *
	 * <label>
	 * : The user group's label.
	 *
	 * [--users=<users>]
	 * : Comma separated list of user IDs to include in the user group.
	 *
	 * [--roles=<roles>]
	 * : Comma separated list of roles to include in the user group.
	 *
	 * [--canonical=<canonical>]
	 * : Comma separated list of canonical roles to include in the user group.
	 *
	 * [--min-role=<min-role>]
	 * : Minimum role of users to include in the user group.
	 *
	 * [--porcelain]
	 * : Output just the user group uuid.
	 */
	public function create( $args, $assoc_args ) {
		$user_group = new User_Group( $this->user_groups->next_id() );
		$user_group->set_label( $args[0] );

		$this->modify( $user_group, $assoc_args );

		if ( get_flag_value( $assoc_args, 'porcelain' ) ) {
			WP_CLI::log( $user_group->get_id() );
		} else {
			WP_CLI::success( 'User group created ' . $user_group->get_id() );
		}
	}

	/**
	 * Update a user group.
	 *
	 * ## OPTIONS
	 *
	 * <id>
	 * : The user group's id.
	 *
	 * [--users=<users>]
	 * : Comma separated list of user IDs to include in the user group.
	 *
	 * [--roles=<roles>]
	 * : Comma separated list of roles to include in the user group.
	 *
	 * [--canonical=<canonical>]
	 * : Comma separated list of canonical roles to include in the user group.
	 *
	 * [--min-role=<min-role>]
	 * : Minimum role of users to include in the user group.
	 *
	 * [--label=<label>]
	 * : The user group's label.
	 */
	public function update( $args, $assoc_args ) {
		try {
			$user_group = $this->user_groups->get( $args[0] );
		} catch ( User_Groups\Repository\User_Group_Not_Found $e ) {
			WP_CLI::error( $e->getMessage() );
		}

		$this->modify( $user_group, $assoc_args );
		WP_CLI::success( 'User group updated.' );
	}

	/**
	 * Modify a user group based on the CLI flags.
	 *
	 * @param User_Group $user_group
	 * @param array      $assoc_args
	 */
	private function modify( User_Group $user_group, array $assoc_args ) {
		if ( ( $users = get_flag_value( $assoc_args, 'users' ) ) !== null ) {
			$user_group->set_users( array_map( function ( $id ) {
				if ( ! $user = get_userdata( $id ) ) {
					WP_CLI::error( sprintf( 'No user found with id %d', $id ) );
				}

				return $user;
			}, $users ? wp_parse_id_list( $users ) : [] ) );
		}

		if ( ( $roles = get_flag_value( $assoc_args, 'roles' ) ) !== null ) {
			$user_group->set_roles( $roles ? wp_parse_slug_list( $roles ) : [] );
		}

		if ( ( $canonical = get_flag_value( $assoc_args, 'canonical' ) ) !== null ) {
			$user_group->set_canonical_roles( $canonical ? wp_parse_slug_list( $canonical ) : [] );
		}

		if ( ( $min_role = get_flag_value( $assoc_args, 'min-role' ) ) !== null ) {
			$user_group->set_min_role( $min_role );
		}

		if ( $label = get_flag_value( $assoc_args, 'label' ) ) {
			$user_group->set_label( $label );
		}

		$this->user_groups->persist( $user_group, [] );
	}

	/**
	 * Check if a user group applies to a user.
	 *
	 * ## OPTIONS
	 *
	 * <group_id>
	 * : The user group id.
	 *
	 * <user_id>...
	 * : One or more of the user IDs to check.
	 *
	 * [--porcelain]
	 * : Only return a status code. If the user group applies to all the users, a 0 exit code will be issued, 1 otherwise.
	 *
	 * [--format=<format>]
	 * : Render output in a particular format.
	 * ---
	 * default: ids
	 * options:
	 *  - ids
	 *  - json
	 *  - csv
	 *  - yaml
	 *  - count
	 */
	public function matches( $args, $assoc_args ) {
		$uuid = array_shift( $args );

		try {
			$user_group = $this->user_groups->get( $uuid );
		} catch ( User_Groups\Repository\User_Group_Not_Found $e ) {
			WP_CLI::error( $e->getMessage() );
		}

		$matches = [];

		foreach ( $args as $id ) {
			if ( $user = get_userdata( $id ) ) {
				if ( $user_group->matches( Match_Target::for_user( $user ) ) ) {
					$matches[] = $id;
				}
			} else {
				WP_CLI::warning( sprintf( 'No user found with id %d.', $id ) );
			}
		}

		if ( get_flag_value( $assoc_args, 'porcelain' ) ) {
			WP_CLI::halt( count( $matches ) === count( $args ) ? 0 : 1 );
		}

		switch ( get_flag_value( $assoc_args, 'format', 'ids' ) ) {
			case 'ids':
				WP_CLI::log( implode( ' ', $matches ) );
				break;
			case 'json':
				WP_CLI::log( json_encode( $matches, JSON_OBJECT_AS_ARRAY ) );
				break;
			case 'csv':
				WP_CLI::log( implode( ',', $matches ) );
				break;
			case 'yaml':
				WP_CLI::log( Spyc::YAMLDump( $matches, 2, 0 ) );
				break;
			case 'count':
				WP_CLI::log( count( $matches ) );
				break;
		}
	}

	/**
	 * Format a user group to an array of data.
	 *
	 * @param User_Group $user_group
	 *
	 * @return array
	 */
	private function format_user_group( User_Group $user_group ) {
		return [
			'id'          => $user_group->get_id(),
			'label'       => $user_group->get_label(),
			'users'       => wp_list_pluck( $user_group->get_users(), 'ID' ),
			'roles'       => $user_group->get_roles(),
			'canonical'   => $user_group->get_canonical_roles(),
			'min_role'    => $user_group->get_min_role(),
			'description' => $user_group->get_description(),
		];
	}
}

WP_CLI::add_command( 'itsec user-group', new ITSEC_User_Groups_Command( ITSEC_Modules::get_container()->get( Repository::class ) ) );

class ITSEC_User_Groups_Settings_Command {

	/** @var User_Groups\Settings_Registry */
	private $registry;

	/** @var User_Groups\Settings_Proxy */
	private $proxy;

	/** @var User_Groups\Matchables_Source */
	private $source;

	/** @var string[] */
	private $default_fields;

	/**
	 * ITSEC_User_Groups_Settings_Command constructor.
	 *
	 * @param User_Groups\Settings_Registry $registry
	 * @param User_Groups\Settings_Proxy    $proxy
	 * @param User_Groups\Matchables_Source $source
	 */
	public function __construct( User_Groups\Settings_Registry $registry, User_Groups\Settings_Proxy $proxy, User_Groups\Matchables_Source $source ) {
		$this->registry       = $registry;
		$this->proxy          = $proxy;
		$this->source         = $source;
		$this->default_fields = [
			'module',
			'setting',
			'enabled',
			'title',
		];
	}

	/**
	 * List a matchable's settings.
	 *
	 * ## OPTIONS
	 *
	 * <id>
	 * : The matchable id.
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
	 *  - ids
	 *  - count
	 *
	 * @subcommand list
	 */
	public function list_( $args, $assoc_args ) {
		list( $id ) = $args;
		$matchable = $this->source->find( $id );

		$settings = [];

		foreach ( $this->registry->get_settings() as $registration ) {
			$settings[] = [
				'module'      => $registration->get_module(),
				'setting'     => $registration->get_setting(),
				'enabled'     => $this->proxy->is_enabled( $matchable, $registration ) ? 'Yes' : 'No',
				'title'       => $registration->get_labels()['title'],
				'description' => $registration->get_labels()['description'],
			];
		}

		$assoc_args = wp_parse_args( $assoc_args, [
			'fields' => $this->default_fields,
		] );
		$formatter  = new Formatter( $assoc_args );
		$formatter->display_items( $settings );
	}

	/**
	 * Get the enabled status for a setting.
	 *
	 * ## OPTIONS
	 *
	 * <module>
	 * : The module the setting is for.
	 *
	 * <setting>
	 * : The setting.
	 *
	 * <id>
	 * : The matchable id.
	 */
	public function get( $args ) {
		list( $module, $setting, $id ) = $args;
		$matchable    = $this->source->find( $id );
		$registration = $this->registry->find( $module, $setting );

		if ( ! $registration ) {
			WP_CLI::error( 'No setting registration found.' );
		}

		WP_CLI::log( $this->proxy->is_enabled( $matchable, $registration ) ? 'Enabled' : 'Disabled' );
	}

	/**
	 * Enable a setting.
	 *
	 * ## OPTIONS
	 *
	 * <module>
	 * : The module the setting is for.
	 *
	 * <setting>
	 * : The setting.
	 *
	 * [<id>]
	 * : The matchable id.
	 *
	 * [--all]
	 * : Apply the change to all groups.
	 */
	public function enable( $args, $assoc_args ) {
		$this->toggle_enabled( $args, $assoc_args, true );
	}

	/**
	 * Disable a setting.
	 *
	 * ## OPTIONS
	 *
	 * <module>
	 * : The module the setting is for.
	 *
	 * <setting>
	 * : The setting.
	 *
	 * [<id>]
	 * : The matchable id.
	 *
	 * [--all]
	 * : Apply the change to all groups.
	 */
	public function disable( $args, $assoc_args ) {
		$this->toggle_enabled( $args, $assoc_args, false );
	}

	private function toggle_enabled( $args, $assoc_args, $enabled ) {
		list( $module, $setting ) = $args;
		$registration = $this->registry->find( $module, $setting );

		if ( ! $registration ) {
			WP_CLI::error( 'No setting registration found.' );
		}

		if ( get_flag_value( $assoc_args, 'all' ) ) {
			$matchables = $this->source->all();
		} elseif ( isset( $args[2] ) ) {
			$matchables = [ $this->source->find( $args[2] ) ];
		} else {
			WP_CLI::error( 'Either specify a matchable id or pass the --all flag.' );
		}

		$direction = $enabled ? 'enabled' : 'disabled';

		foreach ( $matchables as $matchable ) {
			if ( $this->proxy->is_enabled( $matchable, $registration ) === $enabled ) {
				WP_CLI::warning( sprintf( 'The setting is already %s for %s.', $direction, $matchable->get_id() ) );

				continue;
			}

			$error = $this->proxy->set_enabled( $matchable, $registration, $enabled );

			if ( is_wp_error( $error ) ) {
				$string = WP_CLI::error_to_string( $error );
				WP_CLI::error( sprintf( 'Setting could not be %s for %s: %s', $direction, $matchable->get_id(), $string ), false );

				continue;
			}

			WP_CLI::success( sprintf( '%s setting for %s.', ucwords( $direction ), $matchable->get_id() ) );
		}
	}
}

WP_CLI::add_command( 'itsec user-group setting', new ITSEC_User_Groups_Settings_Command(
	ITSEC_Modules::get_container()->get( User_Groups\Settings_Registry::class ),
	ITSEC_Modules::get_container()->get( User_Groups\Settings_Proxy::class ),
	ITSEC_Modules::get_container()->get( User_Groups\Matchables_Source::class )
) );
