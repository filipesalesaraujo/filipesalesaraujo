/**
 * WordPress dependencies
 */
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { getCanonicalRoles } from '@ithemes/security-i18n';

function PanelMinimumRole( { minRole, onChange } ) {
	return (
		<div>
			<SelectControl
				options={ getCanonicalRoles() }
				label={ __( 'Minimum Role', 'it-l10n-ithemes-security-pro' ) }
				value={ minRole }
				onChange={ ( newMinRole ) => onChange( { min_role: newMinRole } ) }
				help={ __( 'Add users with the selected minimum role to this group. To edit roles, go to Users in your WordPress Dashboard.', 'it-l10n-ithemes-security-pro' ) } />
		</div>
	);
}

export default compose( [
	withSelect( ( select, { groupId } ) => ( {
		minRole: select( 'ithemes-security/user-groups-editor' ).getEditedGroupAttribute( groupId, 'min_role' ),
	} ) ),
	withDispatch( ( dispatch, { groupId } ) => ( {
		onChange( edit ) {
			return dispatch( 'ithemes-security/user-groups-editor' ).editGroup( groupId, edit );
		},
	} ) ),
] )( PanelMinimumRole );
