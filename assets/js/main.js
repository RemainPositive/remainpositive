

(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			window.setTimeout(function() {
				$body.removeClass('is-loading');
			}, 0);

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.sc')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

			$( ".sc" ).click(function( event ) {
  				event.preventDefault();
			});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

	});

})(jQuery);


    $( ".js__button_1" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_1").toggleClass( "hide" );
    });


    $( ".js__button_2" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_2").toggleClass( "hide" );
    });


    $( ".js__button_3" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_3").toggleClass( "hide" );
    });


    $( ".js__button_4" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_4").toggleClass( "hide" );
    });


    $( ".js__button_5" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_5").toggleClass( "hide" );
    });


    $( ".js__button_6" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_6").toggleClass( "hide" );
    });

    $( ".js__button_7" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_7").toggleClass( "hide" );
    });

    $( ".js__button_8" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_8").toggleClass( "hide" );
    });

    $( ".js__button_9" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_9").toggleClass( "hide" );
    });

    $( ".js__button_10" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_10").toggleClass( "hide" );
    });

    $( ".js__button_11" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_11").toggleClass( "hide" );
    });

    $( ".js__button_12" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_12").toggleClass( "hide" );
    });

    $( ".js__button_13" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_13").toggleClass( "hide" );
    });

    $( ".js__button_14" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_14").toggleClass( "hide" );
    });

    $( ".js__button_15" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_15").toggleClass( "hide" );
    });

    $( ".js__button_16" ).on( "click", function( event ) {
      event.preventDefault();
      $(".js__options_16").toggleClass( "hide" );
    });
