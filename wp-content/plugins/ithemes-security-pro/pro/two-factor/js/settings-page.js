jQuery( document ).ready( function ( $ ) {
	var updateVisibleSections = function() {
		var availableMethods = jQuery( '#itsec-two-factor-available_methods' ).val();
		var emailMethodEnabled = 'all' === availableMethods || ( 'custom' === availableMethods && jQuery('#itsec-two-factor-custom_available_methods-Two_Factor_Email').prop( 'checked' ) );

		if ( emailMethodEnabled ) {
			jQuery( '.itsec-two-factor-requires-email-provider' ).show();
			jQuery( '.itsec-two-factor-requires-no-email-provider' ).hide();
		} else {
			jQuery( '.itsec-two-factor-requires-email-provider' ).hide();
			jQuery( '.itsec-two-factor-requires-no-email-provider' ).show();
		}

		if ( 'custom' === availableMethods ) {
			jQuery( '#itsec-two-factor-available_methods-container' ).show();
		} else {
			jQuery( '#itsec-two-factor-available_methods-container' ).hide();
		}
	};


	var $container = jQuery( '#wpcontent' );

	$container.on( 'change', '#itsec-two-factor-available_methods', updateVisibleSections );
	$container.on( 'change', '#itsec-two-factor-custom_available_methods-Two_Factor_Email', updateVisibleSections );

	updateVisibleSections();
} );
