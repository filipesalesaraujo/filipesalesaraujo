<?php

final class ITSEC_User_Logging_Settings_Page extends ITSEC_Module_Settings_Page {
	public function __construct() {
		$this->id = 'user-logging';
		$this->title = __( 'User Logging', 'it-l10n-ithemes-security-pro' );
		$this->description = __( 'Log user actions such as login, saving content and others.', 'it-l10n-ithemes-security-pro' );
		$this->type = 'recommended';
		$this->pro = true;

		parent::__construct();
	}

	protected function render_description( $form ) {

?>
	<p><?php _e( 'Log user actions such as login, saving content and others.', 'it-l10n-ithemes-security-pro' ); ?></p>
<?php

	}

	/** @param ITSEC_Form $form */
	protected function render_settings( $form ) {
?>
	<table class="form-table" id="user_logging-enabled">
		<tr>
			<th scope="row"><label for="itsec-user-logging-group"><?php _e( 'Activity Monitoring', 'it-l10n-ithemes-security-pro' ); ?></label></th>
			<td>
				<?php $form->add_user_groups( 'group', $this->id ); ?>
				<br />
				<label for="itsec-user-logging-group"><?php _e( 'Track and log individual user activity.', 'it-l10n-ithemes-security-pro' ); ?></label>
				<p class="itsec-warning-message"><?php _e( 'Warning: If your site invites public registrations setting the group too broad may result in some very large logs.', 'it-l10n-ithemes-security-pro' ); ?></p>
			</td>
		</tr>
	</table>
<?php

	}
}

new ITSEC_User_Logging_Settings_Page();
