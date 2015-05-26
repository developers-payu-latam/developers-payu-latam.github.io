window.onload = function() {

	var waypoint = new Waypoint({
		element: document.getElementById("content"),
		handler: function(direction) {

			if (direction === 'down') {
				$(".payu-title1").addClass("collapsed");    
			} else {
				$(".payu-title1").removeClass("collapsed");    
			}

		},
		offset: 0
	});

	
	$et_search_icon = $( '#et_search_icon' );
	$et_search_icon.click( function() {
			var $this_el = $(this),
				$form = $this_el.siblings( '.et-search-form' );

			if ( $form.hasClass( 'et-hidden' ) ) {
				$form.css( { 'display' : 'block', 'opacity' : 0 } ).animate( { opacity : 1 }, 500 );
			} else {

				$form.css( { 'display' : 'none'} );
				
			}

			$form.toggleClass( 'et-hidden' );
		} );
	
	
}