import { omitBy } from 'lodash';
import { __, sprintf } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { SelectControl } from '@ithemes/security-components';

function useActorsSelect( emptyLabel = '' ) {
	const selected = useSelect( ( select ) => {
		const selectTypes = select( 'ithemes-security/core' ).getActorTypes() || [];
		const selectByType = {};

		for ( const type of selectTypes ) {
			selectByType[ type.slug ] = select( 'ithemes-security/core' ).getActors( type.slug );
		}

		return { types: selectTypes, byType: selectByType };
	}, [] );
	const { types, byType } = selected;

	const options = [];
	options.push( {
		label: emptyLabel,
		value: '',
	} );

	for ( const type of types ) {
		options.push( {
			label: sprintf( __( 'Any %s', 'it-l10n-ithemes-security-pro' ), type.label ),
			value: type.slug,
			optgroup: type.label,
		} );

		for ( const actor of ( byType[ type.slug ] || [] ) ) {
			options.push( {
				label: actor.label,
				value: type.slug + ':' + actor.id,
				optgroup: type.label,
			} );
		}
	}

	return options;
}

export default function Search( {
	query,
} ) {
	const actors = useActorsSelect( __( 'All', 'it-l10n-ithemes-security-pro' ) );
	const [ search, setSearch ] = useState( {
		search: '',
		actor_id: '',
		actor_type: '',
	} );
	const onSearch = ( change ) => {
		const newSearch = { ...search, ...change };
		setSearch( newSearch );
		query( 'main', { ...omitBy( newSearch, ( value ) => value === '' ), per_page: 100 } );
	};

	return (
		<section className="itsec-card-banned-users__search">
			<SelectControl
				options={ actors }
				hideLabelFromVision
				label={ __( 'Ban Reason', 'it-l10n-ithemes-security-pro' ) }
				value={ search.actor_type && search.actor_id ? search.actor_type + ':' + search.actor_id : search.actor_type }
				onChange={ ( change ) => {
					if ( change === '' ) {
						onSearch( { actor_type: '', actor_id: '' } );
					} else {
						const [ actorType, actorId = '' ] = change.split( ':' );
						onSearch( { actor_type: actorType, actor_id: actorId } );
					}
				} }
			/>
			<TextControl
				value={ search.search }
				onChange={ ( term ) => onSearch( { search: term } ) }
				hideLabelFromVision
				label={ __( 'Search', 'it-l10n-ithemes-security-pro' ) }
				type="search"
			/>
		</section>
	);
}
