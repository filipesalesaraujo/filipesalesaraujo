<?php

namespace iThemesSecurity\PasswordlessLogin\Integrations;

use iThemesSecurity\PasswordlessLogin\Integration\Integration;

class RestrictContentPro implements Integration {
	public function get_name() {
		return 'Restrict Content Pro';
	}

	public function get_slug() {
		return 'rcp';
	}

	public function run() {
		add_action( 'rcp_before_register_form_fields', [ $this, 'render_passwordless_link' ] );
		add_action( 'rcp_before_login_form_fields', [ $this, 'render_passwordless_link' ] );
	}

	public function render_passwordless_link() {
		$redirect_to = rcp_get_current_url();

		if ( doing_action( 'rcp_before_register_form_fields' ) ) {
			$fields = [ 'discount', 'level' ];

			foreach ( $fields as $field ) {
				if ( isset( $_REQUEST[ $field ] ) ) {
					$redirect_to = add_query_arg( $field, urlencode( $_REQUEST[ $field ] ), $redirect_to );
				}
			}
		}

		add_filter( 'rcp_do_login_hijack', '__return_false', 100 );
		?>
		<p><?php echo \ITSEC_Passwordless_Login_Utilities::render_modal_link( $redirect_to ); ?></p>
		<?php
		remove_filter( 'rcp_do_login_hijack', '__return_false', 100 );
	}
}
