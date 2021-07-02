/* global grecaptcha, jQuery */

( function( $ ) {
	window.itsecRecaptcha = window.itsecRecaptcha || {};
	window.itsecRecaptcha.v3 = new ITSECRecaptchaV3( window.itsecRecaptcha.siteKey );

	function ITSECRecaptchaV3( siteKey ) {
		this.siteKey = siteKey;
		this.onLoadCallbacks = [];
		this.loaded = false;
	}

	ITSECRecaptchaV3.prototype.load = function() {
		$( '.itsec-g-recaptcha' ).each( ( function( i, input ) {
			var $input = $( input ),
				$form = $input.parents( 'form' );

			if ( !$form || $input.data( 'controlled' ) ) {
				return;
			}

			$form.on( 'submit.itsecRecaptcha', 'form', this.makeSubmitHandler( $form, $input, false ) );
			$form.on( 'click.itsecRecaptcha', ':submit', this.makeSubmitHandler( $form, $input, true ) );
		} ).bind( this ) );

		for ( var i = 0; i < this.onLoadCallbacks.length; i++ ) {
			var callback = this.onLoadCallbacks[ i ];
			callback( this );
		}

		this.loaded = true;
	};

	ITSECRecaptchaV3.prototype.onLoad = function( callback ) {
		if ( this.loaded ) {
			callback( this );
		} else {
			this.onLoadCallbacks.push( callback );
		}
	};

	ITSECRecaptchaV3.prototype.execute = function( action, callback ) {
		grecaptcha.ready( ( function() {
			grecaptcha.execute( this.siteKey, { action: action } )
				.then( function( token ) {
					callback( token );
				} );
		} ).bind( this ) );
	};

	ITSECRecaptchaV3.prototype.makeSubmitHandler = function( $form, $input, isClick ) {
		return ( function( e ) {
			e.preventDefault();

			var $this = $( e.target ).attr( 'disabled', true );

			if ( isClick ) {
				$( '<input type="hidden">' ).attr( {
					name : $( e.target ).attr( 'name' ),
					value: $( e.target ).val(),
				} ).appendTo( $form );
			}

			this.execute( $input.data( 'action' ), ( function( token ) {
				this.callback( $form, token );
				$this.removeAttr( 'disabled' );
			} ).bind( this ) );
		} ).bind( this );
	};

	ITSECRecaptchaV3.prototype.callback = function( $form, token ) {
		$form.off( 'submit.itsecRecaptcha' );
		$form.off( 'click.itsecRecaptcha' );

		this.addTokenToForm( token, $form );
		this.submitForm( $form );
	};

	ITSECRecaptchaV3.prototype.addTokenToForm = function( token, $form ) {
		var $input = $( ':input[name="g-recaptcha-response"]', $form );

		if ( $input.length ) {
			$input.val( token );
		} else {
			$( '<input type="hidden">' ).attr( {
				name : 'g-recaptcha-response',
				value: token,
			} ).appendTo( $form );
		}
	};

	ITSECRecaptchaV3.prototype.submitForm = function( $form ) {
		// Properly submit forms that have an input with a name of "submit".
		if ( $( ':input[name="submit"]', $form ).length ) {
			HTMLFormElement.prototype.submit.call( $form.get( 0 ) );
		} else {
			$form.trigger( 'submit' );
		}
	};
} )( jQuery );

function itsecRecaptchav3Load() {
	jQuery( function() {
		window.itsecRecaptcha.v3.load();
	} );
}
