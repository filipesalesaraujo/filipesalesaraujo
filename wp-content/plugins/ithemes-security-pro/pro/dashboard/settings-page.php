<?php

class ITSEC_Dashboard_Settings_Page extends ITSEC_Module_Settings_Page {

	public function __construct() {
		parent::__construct();

		$this->id          = 'dashboard';
		$this->title       = __( 'Security Dashboard', 'it-l10n-ithemes-security-pro' );
		$this->description = __( 'See a real-time overview of the security activity on your website with this dynamic dashboard.', 'it-l10n-ithemes-security-pro' );
		$this->pro         = true;
	}

	public function enqueue_scripts_and_styles() {
		wp_enqueue_style( 'itsec-dashboard-admin', plugins_url( 'css/settings-page.css', __FILE__ ), array(), ITSEC_Core::get_plugin_build() );
	}

	protected function render_description( $form ) {
		echo '<p>' . $this->description . '</p>';
	}

	/** @param ITSEC_Form $form */
	protected function render_settings( $form ) {
		?>

		<p><a href="<?php echo esc_url( network_admin_url( 'index.php?page=itsec-dashboard' ) ) ?>"><?php esc_html_e( 'View Security Dashboard', 'it-l10n-ithemes-security-pro' ); ?></a></p>

		<table class="form-table">
			<tr>
				<th scope="row">
					<label for="itsec-dashboard-group">
						<?php esc_html_e( 'Enable Dashboard Creation', 'it-l10n-ithemes-security-pro' ) ?>
					</label>
				</th>
				<td>
					<p class="description">
						<?php esc_html_e( 'Allow the group to create new iThemes Security Dashboards.', 'it-l10n-ithemes-security-pro' ) ?>&nbsp;
					</p>
					<?php $form->add_user_groups( 'group', $this->id ); ?>
				</td>
			</tr>
		</table>

		<?php
	}
}

new ITSEC_Dashboard_Settings_Page();
