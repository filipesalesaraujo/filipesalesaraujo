<?php

namespace iThemesSecurity\User_Groups;

final class All_Users implements Matchable {
	public function get_id() {
		return ':all';
	}

	public function get_label() {
		return __( 'All Users', 'it-l10n-ithemes-security-pro' );
	}

	public function matches( Match_Target $target ) {
		return true;
	}
}
