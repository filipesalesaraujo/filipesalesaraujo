<?php

class ITSEC_Dashboard_Card_Banned_Users extends ITSEC_Dashboard_Card {
	public function get_slug() {
		return 'banned-users-list';
	}

	public function get_label() {
		return __( 'Banned Users' );
	}

	public function get_size() {
		return [
			'minW'     => 2,
			'minH'     => 2,
			'maxW'     => 3,
			'maxH'     => 4,
			'defaultW' => 2,
			'defaultH' => 3,
		];
	}

	public function query_for_data( array $query_args, array $settings ) {
		return [];
	}

	public function get_links() {
		return [];
	}
}
