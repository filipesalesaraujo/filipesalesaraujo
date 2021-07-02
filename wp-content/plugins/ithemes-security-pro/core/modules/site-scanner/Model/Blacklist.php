<?php

namespace iThemesSecurity\Site_Scanner;

final class Blacklist implements Issue {
	use Issue_Trait;

	public function __construct( array $details ) {
		$this->id     = $details['vendor']['slug'];
		$this->status = $details['status'] === 'blacklisted' ? Status::WARN : Status::CLEAN;
		$this->link   = $details['report_details'];
		$this->entry  = 'blacklist';

		if ( Status::WARN === $this->status ) {
			$this->description = sprintf( esc_html__( 'Domain blocked by %s', 'it-l10n-ithemes-security-pro' ), esc_html( $details['vendor']['label'] ) );
		} else {
			$this->description = sprintf( esc_html__( 'Domain clean by %s', 'it-l10n-ithemes-security-pro' ), esc_html( $details['vendor']['label'] ) );
		}
	}

	public function get_meta() {
		return [];
	}
}
