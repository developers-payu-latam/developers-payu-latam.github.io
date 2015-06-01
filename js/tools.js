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

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

jQuery(document).ready(function() {
	var prodId = getParameterByName('opened_div');
	if(prodId!=''){
	$('#varstableid_'+prodId ).click();
	$('html,body').animate({scrollTop: $('#varstableid_'+prodId).offset().top-80},'slow');
	}
});