( function( $, itsec ) {

	$( function() {
		$( document ).on( 'change', '#itsec-fingerprinting-maxmind_lite_key', function() {
			if ( $( this ).val().length > 0 ) {
				$( '#itsec-fingerprinting-download' ).removeProp( 'disabled' );
			} else {
				$( '#itsec-fingerprinting-download' ).prop( 'disabled', true );
			}
		} );

		$( document ).on( 'click', '#itsec-fingerprinting-download', function( e ) {
			e.preventDefault();

			var data = {
				method: 'download',
				key   : $( '#itsec-fingerprinting-maxmind_lite_key' ).val(),
			};

			var $status = $( '#itsec-fingerprinting-maxmind-db-status' ),
				$container = $( '#itsec-fingerprinting-maxmind-db-download-container' ),
				$button = $( this );

			$button.prop( 'disabled', true );

			itsec.sendModuleAJAXRequest( 'fingerprinting', data, function( response ) {
				if ( response.success ) {
					$container.addClass( 'itsec-fingerprinting-maxmind-db-downloaded' );
				} else {
					$button.removeProp( 'disabled' );
				}

				itsec.displayNotices( response, $status, true );
			} );
		} );
	} );

} )( jQuery, itsecUtil );
