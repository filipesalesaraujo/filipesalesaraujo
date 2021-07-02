<?php

use function WP_CLI\Utils\get_flag_value;

class ITSEC_Logs_Command {

	const ALL_COLUMNS = [
		'id',
		'type',
		'module',
		'code',
		'timestamp',
		'init_timestamp',
		'remote_ip',
		'user_id',
		'url',
		'parent_id',
		'memory_current',
		'memory_peak',
		'data',
	];

	CONST DEFAULT_COLUMNS = [
		'id',
		'type',
		'module',
		'code',
		'timestamp',
		'remote_ip',
		'user_id',
	];

	/**
	 * List log items.
	 *
	 * ## OPTIONS
	 *
	 * [--<field>=<value>]
	 * : One or more filters.
	 *
	 * [--before=<before>]
	 * : Find items that happened before a given date. Accepts a strtotime compatible string.
	 *
	 * [--after=<after>]
	 * : Find items that happened after a given date. Accepts a strtotime compatible string.
	 *
	 * [--count=<count>]
	 * : The number of items to return. Defaults to 10.
	 *
	 * [--page=<page>]
	 * : The page number to return items from.
	 *
	 * [--orderby=<orderby>]
	 * : The column to order results by. Defaults to the id.
	 *
	 * [--order=<order>]
	 * : The order direction to return results in.
	 * ---
	 * default: desc
	 * options:
	 *   - desc
	 *   - asc
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
	 * ## AVAILABLE FIELDS
	 *
	 * These fields will be displayed by default for each item:
	 *
	 * * id
	 * * type
	 * * module
	 * * code
	 * * timestamp
	 * * remote_ip
	 * * user_id
	 *
	 * These fields are optionally available:
	 *
	 * * init_timestamp
	 * * url
	 * * parent_id
	 * * memory_current
	 * * memory_peak
	 * * data
	 *
	 * ## FILTERS
	 *
	 * Any of the available fields can be filtered against.
	 * Separate multiple values by commas to find logs matching any one of multiple values.
	 * Prefix the field name by "not_" to find logs that do not have the given value.
	 * Prefix the field name by "min_" or "max_" to find logs that have a value greater or smaller than the given value.
	 * Include a '%" sign to perform a LIKE comparison against the field value.
	 *
	 * ## EXAMPLES
	 *
	 *     # Get plugin updates.
	 *     $ wp itsec log list --module=version_management --code=update::plugin% --fields=id,code,timestamp,remote_ip,user_id
	 *     +-------+----------------------------------------------------------------+---------------------+---------------+---------+
	 *     | id    | code                                                           | timestamp           | remote_ip     | user_id |
	 *     +-------+----------------------------------------------------------------+---------------------+---------------+---------+
	 *     | 28518 | update::plugin,contact-form-7/wp-contact-form-7.php,5.1.7,auto | 2020-03-07 18:36:50 | 141.31.80.100 | 0       |
	 *     | 28479 | update::plugin,wordpress-seo/wp-seo.php,13.2,manual            | 2020-03-05 17:52:33 | 141.31.80.100 | 10      |
	 *     +-------+----------------------------------------------------------------+---------------------+---------------+---------+
	 *
	 * @subcommand list
	 */
	public function list_( $args, $assoc_args ) {
		global $wpdb;
		$wpdb->show_errors( false );

		$count   = get_flag_value( $assoc_args, 'count', 10 );
		$page    = get_flag_value( $assoc_args, 'page', 1 );
		$orderby = get_flag_value( $assoc_args, 'orderby', 'id' );
		$order   = get_flag_value( $assoc_args, 'order', 'desc' );
		$fields  = get_flag_value( $assoc_args, 'fields', self::DEFAULT_COLUMNS );
		$format  = get_flag_value( $assoc_args, 'format', 'table' );
		$field   = get_flag_value( $assoc_args, 'field' );

		if ( '*' === $fields ) {
			$columns = 'all';
			$fields  = self::ALL_COLUMNS;
		} else {
			$columns = wp_parse_slug_list( $fields );
		}

		$filters = $assoc_args;
		unset( $filters['count'], $filters['page'], $filters['orderby'], $filters['order'], $filters['field'], $filters['fields'], $filters['format'] );
		$filters = array_map( 'wp_parse_list', $filters );

		foreach ( $filters as $filter => $value ) {
			if ( count( $value ) === 1 ) {
				$filters[ $filter ] = $value[0];
			}
		}

		if ( 'ids' === $format ) {
			$columns = [ 'id' ];
		} elseif ( 'count' === $format ) {
			$filters['__get_count'] = true;
		}

		if ( $before = get_flag_value( $assoc_args, 'before' ) ) {
			$filters['__max_timestamp'] = strtotime( $before );
		}

		if ( $after = get_flag_value( $assoc_args, 'after' ) ) {
			$filters['__min_timestamp'] = strtotime( $after );
		}

		if ( $field ) {
			$columns = [ $field ];
		}

		$entries = ITSEC_Log::get_entries( $filters, $count, $page, $orderby, strtoupper( $order ), $columns );

		if ( $wpdb->last_error ) {
			WP_CLI::error( $wpdb->last_error );
		}

		if ( 'ids' === $format ) {
			echo implode( ' ', wp_list_pluck( $entries, 'id' ) );
		} elseif ( 'count' === $format ) {
			echo $entries;
		} else {
			$format_args = [
				'format' => $format,
				'fields' => $fields,
				'field'  => $field,
			];
			$formatter   = new \WP_CLI\Formatter( $format_args );
			$formatter->display_items( array_map( [ $this, 'format_item' ], $entries ) );
		}
	}

	/**
	 * Get a log item.
	 *
	 * ## OPTIONS
	 *
	 * <id>
	 * : The log item id.
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
	 *   - json
	 *   - yaml
	 * ---
	 */
	public function get( $args, $assoc_args ) {
		$entry = ITSEC_Log::get_entry( $args[0] );

		if ( ! $entry ) {
			WP_CLI::error( 'Log item not found.' );
		}

		$format_args = wp_parse_args( $assoc_args, [
			'fields' => self::DEFAULT_COLUMNS,
			'format' => 'table',
		] );
		$formatter   = new \WP_CLI\Formatter( $format_args );
		$formatter->display_item( $this->format_item( $entry ) );
	}

	/**
	 * Prune log items.
	 *
	 * ## OPTIONS
	 *
	 * [<days>]
	 * : Prune log items older than the given amount of days. Set to 0 to delete all items.
	 * If omitted, the default log rotation value will be used.
	 */
	public function prune( $args ) {
		global $wpdb;
		$wpdb->show_errors( false );

		if ( ! isset( $args[0] ) ) {
			ITSEC_Log::purge_entries();

			if ( $wpdb->last_error ) {
				WP_CLI::error( $wpdb->last_error );
			}

			WP_CLI::success( 'Log items pruned according to global settings.' );

			return;
		}

		list( $days ) = $args;

		if ( ! ctype_digit( $days ) || $days < 0 ) {
			WP_CLI::error( 'The days argument must be an integer >= 0.' );
		}

		$days = (int) $days;

		if ( 0 === $days ) {
			$wpdb->query( "TRUNCATE {$wpdb->base_prefix}itsec_logs" );

			if ( $wpdb->last_error ) {
				WP_CLI::error( $wpdb->last_error );
			}

			WP_CLI::success( 'Logs table truncated.' );

			return;
		}

		$wpdb->query( $wpdb->prepare(
			"DELETE FROM `{$wpdb->base_prefix}itsec_logs` WHERE timestamp<%s",
			date( 'Y-m-d H:i:s', ITSEC_Core::get_current_time_gmt() - ( $days * DAY_IN_SECONDS ) )
		) );

		if ( $wpdb->last_error ) {
			WP_CLI::error( $wpdb->last_error );
		}

		WP_CLI::success( sprintf( 'Deleted log items created %d days ago.', $days ) );
	}

	private function format_item( array $item ) {
		return $item;
	}
}

WP_CLI::add_command( 'itsec log', new ITSEC_Logs_Command(), [
	'before_invoke' => function () {
		if ( 'file' === ITSEC_Modules::get_setting( 'global', 'log_type' ) ) {
			WP_CLI::error( 'The log command is only available if the log_type is set to "database" or "both".' );
		}
	}
] );
