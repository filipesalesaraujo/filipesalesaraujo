/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export default function ErrorList( { errors } ) {
	return (
		<div className="itsec-rjsf-error-list">
			<h3>{ __( 'Errors', 'it-l10n-ithemes-security-pro' ) }</h3>
			<ul>
				{ errors.map( ( error, i ) => {
					return (
						<li key={ i }>
							{ error.stack }
						</li>
					);
				} ) }
			</ul>
		</div>
	);
}
