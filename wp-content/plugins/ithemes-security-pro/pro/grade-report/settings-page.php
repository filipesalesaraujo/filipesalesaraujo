<?php

use iThemesSecurity\User_Groups\Matcher;
use iThemesSecurity\User_Groups;

/**
 * Class ITSEC_Grading_System_Settings_Page
 */
class ITSEC_Grading_System_Settings_Page extends ITSEC_Module_Settings_Page {

	private $version = 1;

	public function __construct() {
		$this->id          = 'grade-report';
		$this->title       = __( 'Grade Report', 'it-l10n-ithemes-security-pro' );
		$this->description = __( 'See your WordPress security grade and fix issues.', 'it-l10n-ithemes-security-pro' );
		$this->type        = 'recommended';
		$this->pro         = true;

		parent::__construct();
	}

	public function enqueue_scripts_and_styles() {
		wp_enqueue_style( 'itsec-grade-report-admin', plugins_url( 'css/settings-page.css', __FILE__ ), array(), $this->version );
	}

	protected function render_description( $form ) {

		?>
		<p><?php echo $this->description; ?></p>
		<?php

	}

	protected function render_settings( $form ) {
		?>
		<table class="form-table">
			<tr>
				<th scope="row">
					<label for="itsec-grade-report-group">
						<?php _e( 'Enable', 'it-l10n-ithemes-security-pro' ); ?>
					</label>
				</th>
				<td>
					<p class="description"><?php esc_html_e( 'Select the group of users who can view the Grade Report.', 'it-l10n-ithemes-security-pro' ); ?></p>
					<?php $form->add_user_groups( 'group', $this->id ); ?>
				</td>
			</tr>
		</table>
		<?php

	}

}

new ITSEC_Grading_System_Settings_Page();
