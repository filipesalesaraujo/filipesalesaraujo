/**
 * External dependencies
 */
import { useDebounceCallback } from '@react-hook/debounce';
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Header, { Title } from '../../components/card/header';
import Footer from '../../components/card/footer';
import { Back } from '../../components/master-detail';
import Search from './search';
import List from './list';
import './style.scss';
import AddNew from './add-new';

function BannedUsers( { card, config, eqProps } ) {
	const [ isCreating, setCreating ] = useState( false );
	const [ isSaving, setSaving ] = useState( false );
	const { schema, createForms } = useSelect( ( select ) => ( {
		schema: select( 'ithemes-security/core' ).getSchema( 'ithemes-security-ban' ),
		createForms: select( 'ithemes-security/bans' ).getQueryHeaderLinks( 'main', 'create-form' ),
	} ) );
	const { createBan, query, invalidateResolutionForStoreSelector: invalidateResolution } = useDispatch( 'ithemes-security/bans' );
	const debouncedQuery = useDebounceCallback( query, 500 );
	const [ selected, select ] = useState( 0 );
	const isSmall = eqProps[ 'max-height' ] && eqProps[ 'max-height' ].includes( '500px' );
	const onSelect = ( selectedId ) => {
		select( selectedId );
		setCreating( false );
	};
	const formId = `itsec-ban-card-create-form__${ card.id }`;
	return (
		<div className={ classnames( 'itsec-card--type-banned-users', {
			'itsec-card-banned-users--creating': isCreating,
		} ) }>
			<Header>
				<Back isSmall={ isSmall } select={ select } selectedId={ selected } />
				<Title card={ card } config={ config } />
			</Header>
			<Search query={ debouncedQuery } />
			<List selected={ isCreating ? false : selected } onSelect={ onSelect } isSmall={ isSmall } />
			{ isCreating && (
				<AddNew id={ formId } schema={ schema } save={ createBan } setSaving={ setSaving } afterSave={ () => invalidateResolution( 'getBans' ) } />
			) }
			<Footer>
				{ isCreating && (
					<>
						<span className="itsec-card-footer__action">
							<Button isLink disabled={ isSaving } onClick={ () => setCreating( false ) }>
								{ __( 'Cancel', 'it-l10n-ithemes-security-pro' ) }
							</Button>
						</span>
						<span className="itsec-card-footer__action">
							<Button isPrimary form={ formId } type="submit" isBusy={ isSaving } disabled={ isSaving }>
								{ __( 'Save Ban', 'it-l10n-ithemes-security-pro' ) }
							</Button>
						</span>
					</>
				) }
				{ ! isCreating && (
					<>
						{ createForms.length > 0 && (
							<span className="itsec-card-footer__action">
								<Button isPrimary onClick={ () => setCreating( ! isCreating ) }>
									{ __( 'Add Ban', 'it-l10n-ithemes-security-pro' ) }
								</Button>
							</span>
						) }
					</>
				) }
			</Footer>
		</div>
	);
}

export const slug = 'banned-users-list';
export const settings = {
	render: BannedUsers,
	elementQueries: [
		{
			type: 'height',
			dir: 'max',
			px: 500,
		},
	],
};
