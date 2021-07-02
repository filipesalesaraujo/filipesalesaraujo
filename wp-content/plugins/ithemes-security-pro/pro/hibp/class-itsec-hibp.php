<?php

use iThemesSecurity\User_Groups;

/**
 * Class ITSEC_HIBP
 */
class ITSEC_HIBP implements \iThemesSecurity\Contracts\Runnable {

	/** @var User_Groups\Matcher */
	private $matcher;

	/**
	 * ITSEC_HIBP constructor.
	 *
	 * @param User_Groups\Matcher $matcher
	 */
	public function __construct( User_Groups\Matcher $matcher ) { $this->matcher = $matcher; }

	/**
	 * Initialize the module.
	 */
	public function run() {
		add_action( 'itsec_register_password_requirements', array( $this, 'register_requirement' ) );
		add_action( 'itsec_register_user_group_settings', [ $this, 'register_group_setting' ] );
	}

	public function register_requirement() {
		ITSEC_Lib_Password_Requirements::register( 'hibp', array(
			'evaluate'        => array( $this, 'evaluate' ),
			'validate'        => array( $this, 'validate' ),
			'reason'          => array( $this, 'reason' ),
			'defaults'        => array(
				'group' => ITSEC_Modules::get_settings_obj( 'user-groups' )->get_groups_for_all_users(),
			),
			'settings_config' => array( $this, 'get_settings_config' ),
		) );
	}

	public function register_group_setting( User_Groups\Settings_Registry $registry ) {
		if ( ITSEC_Lib_Password_Requirements::is_requirement_enabled( 'hibp' ) ) {
			$registry->register( new User_Groups\Settings_Registration( 'password-requirements', 'requirement_settings.hibp.group', User_Groups\Settings_Registration::T_MULTIPLE, static function () {
				return [
					'title'       => __( 'Refuse Compromised Passwords', 'it-l10n-ithemes-security-pro' ),
					'description' => __( 'Force users to use passwords which do not appear in any password breaches tracked by Have I Been Pwned.', 'it-l10n-ithemes-security-pro' ),
				];
			} ) );
		}
	}

	public function evaluate( $password ) {

		require_once( dirname( __FILE__ ) . '/class-itsec-hibp-api.php' );

		return ITSEC_HIBP_API::check_breach_count( $password );
	}

	public function validate( $breaches, $user, $settings, $args ) {
		if ( ! $breaches ) {
			return true;
		}

		if ( ! $user = get_userdata( $user->ID ) ) {
			return true;
		}

		$target = isset( $args['target'] ) ? $args['target'] : User_Groups\Match_Target::for_user( $user );

		if ( ! $this->matcher->matches( $target, $settings['group'] ) ) {
			return true;
		}

		return esc_html( sprintf( _n( 'This password appeared in a breach %s time. Please choose a new password.', 'This password appeared in a breach %s times. Please choose a new password.', $breaches, 'it-l10n-ithemes-security-pro' ), number_format_i18n( $breaches ) ) );
	}

	public function reason( $breaches ) {
		$message = _n(
			'Your password was detected %1$s time in password breaches of other websites. Your account hasn\'t been compromised on %2$s, but to keep your account secure, you must update your password now.',
			'Your password was detected %1$s times in password breaches of other websites. Your account hasn\'t been compromised on %2$s, but to keep your account secure, you must update your password now.',
			$breaches,
			'it-l10n-ithemes-security-pro'
		);

		$link = '<a href="' . esc_attr( home_url( '/' ) ) . '">' . get_bloginfo( 'title', 'display' ) . '</a>';

		$message = esc_html( $message );
		$message = wptexturize( $message );
		$message = sprintf( $message, number_format_i18n( $breaches ), $link );

		return $message;
	}

	public function get_settings_config() {
		$link = 'https://www.troyhunt.com/ive-just-launched-pwned-passwords-version-2/#cloudflareprivacyandkanonymity';

		$description = sprintf(
			esc_html__( 'Force users to use passwords which do not appear in any password breaches tracked by %1$sHave I Been Pwned%2$s.', 'it-l10n-ithemes-security-pro' ),
			'<a href="https://haveibeenpwned.com" target="_blank" rel="noopener noreferrer">',
			'</a>'
		);
		$description .= ' ' . sprintf(
				esc_html__( 'Plaintext passwords are never sent to Have I Been Pwned. Instead, 5 characters of the hashed password are sent over an encrypted connection to their API. Read the %1$stechnical details here%2$s.', 'it-l10n-ithemes-security-pro' ),
				'<a href="' . esc_attr( $link ) . '"  target="_blank" rel="noopener noreferrer">',
				'</a>'
			);

		return array(
			'label'       => esc_html__( 'Refuse Compromised Passwords', 'it-l10n-ithemes-security-pro' ),
			'description' => $description,
			'render'      => array( $this, 'render_settings' ),
			'sanitize'    => array( $this, 'sanitize_settings' ),
		);
	}

	/**
	 * Render the Settings Page.
	 *
	 * @param ITSEC_Form $form
	 */
	public function render_settings( $form ) {
		?>
		<tr>
			<th scope="row">
				<label for="itsec-password-requirements-requirement_settings-hibp-group">
					<?php esc_html_e( 'User Group', 'it-l10n-ithemes-security-pro' ); ?>
				</label>
			</th>
			<td>
				<?php $form->add_user_groups( 'group', 'password-requirements', 'requirement_settings.hibp.group' ); ?>
				<br/>
				<label for="itsec-password-requirements-requirement_settings-hibp-group"><?php _e( 'Require users in the selected groups to have passwords that must not appear in a breach.', 'it-l10n-ithemes-security-pro' ); ?></label>
			</td>
		</tr>
		<?php
	}

	/**
	 * Get a list of the sanitizer rules to apply.
	 *
	 * @param array $settings
	 *
	 * @return array
	 */
	public function sanitize_settings( $settings ) {
		return array(
			array( 'user-groups', 'group', esc_html__( 'User Groups for Have I Been Pwned', 'it-l10n-ithemes-security-pro' ) ),
		);
	}
}
