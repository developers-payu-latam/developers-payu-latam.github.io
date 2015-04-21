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

}