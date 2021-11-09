/**
 * Pingdom's extensions of the Data Tables plugin
 *
 * Copyright 2011 Pingdom
 */

$.fn.dataTableExt.oPagination.four_button = {
    /*
     * Function: oPagination.four_button.fnInit
     * Purpose:  Initalise dom elements required for pagination with a list of the pages
     * Returns:  -
     * Inputs:   object:oSettings - dataTables settings object
     *           node:nPaging - the DIV which contains this pagination control
     *           function:fnCallbackDraw - draw function which must be called on update
     */
    "fnInit": function ( oSettings, nPaging, fnCallbackDraw )
    {
        nFirst = $("<a />", { text: oSettings.oLanguage.oPaginate.sFirst }).addClass('paginate_button first');
        nPrevious = $("<a />", { text: oSettings.oLanguage.oPaginate.sPrevious }).addClass('paginate_button previous');
        nNext = $("<a />", { text: oSettings.oLanguage.oPaginate.sNext }).addClass('paginate_button next');
        nLast = $("<a />", { text: oSettings.oLanguage.oPaginate.sLast }).addClass('paginate_button last');

        $(nPaging)
            .append(nFirst)
            .append(nPrevious)
            .append($("<span />", { text: 'Page ' }))
            .append($('<span />', { text: 'n' }))
            .append($('<span />', { text: ' of ' }))
            .append($('<span />', { text: 'n' }))
            .append(nNext)
            .append(nLast);

        nFirst.click( function () {
            oSettings.oApi._fnPageChange( oSettings, "first" );
            fnCallbackDraw( oSettings );
        });

        nPrevious.click( function() {
            oSettings.oApi._fnPageChange( oSettings, "previous" );
            fnCallbackDraw( oSettings );
        });

        nNext.click( function() {
            oSettings.oApi._fnPageChange( oSettings, "next" );
            fnCallbackDraw( oSettings );
        });

        nLast.click( function() {
            oSettings.oApi._fnPageChange( oSettings, "last" );
            fnCallbackDraw( oSettings );
        });
    },

    /*
     * Function: oPagination.four_button.fnUpdate
     * Purpose:  Update the list of page buttons shows
     * Returns:  -
     * Inputs:   object:oSettings - dataTables settings object
     *           function:fnCallbackDraw - draw function which must be called on update
     */
    "fnUpdate": function ( oSettings, fnCallbackDraw )
    {
        if ( !oSettings.aanFeatures.p )
        {
            return;
        }

        var pageSize = oSettings._iDisplayLength;
        var currentPage = Math.ceil((oSettings._iDisplayStart + pageSize) / pageSize);
        var totalPages = Math.ceil(oSettings.fnRecordsDisplay() / pageSize);

        /* Loop over each instance of the pager */
        var an = oSettings.aanFeatures.p;
        for ( var i=0, iLen = an.length ; i < iLen ; i++ )
        {
            var links = an[i].getElementsByTagName('a');

            if ( oSettings._iDisplayStart === 0 )
            {
                links[0].className = "paginate_button first disabled";
                links[1].className = "paginate_button previous disabled";

                links[0].href = '#';
                links[1].href = '#';
            }
            else
            {
                links[0].className = "paginate_button first enabled";
                links[1].className = "paginate_button previous enabled";

                links[0].href = '?page=' + (currentPage - 1) + '&pagesize=' + pageSize;
                links[1].href = '?page=1&pagesize=' + pageSize;
            }

            if ( oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay() )
            {
                links[2].className = "paginate_button next disabled";
                links[3].className = "paginate_button last disabled";

                links[2].href = '#';
                links[3].href = '#';
            }
            else
            {
                links[2].className = "paginate_button next enabled";
                links[3].className = "paginate_button last enabled";

                links[2].href = '?page=' + (currentPage + 1) + '&pagesize=' + pageSize;
                links[3].href = '?page=' + totalPages + '&pagesize=' + pageSize;
            }

            var spans = an[i].getElementsByTagName('span');

            spans[1].innerHTML = currentPage;
            spans[3].innerHTML = totalPages;
        }
    }
};

jQuery.fn.dataTableExt.oApi.fnSetFilteringDelay = function ( oSettings, iDelay ) {
	/*
	 * Type:        Plugin for DataTables (www.datatables.net) JQuery plugin.
	 * Name:        dataTableExt.oApi.fnSetFilteringDelay
	 * Version:     2.2.1
	 * Description: Enables filtration delay for keeping the browser more
	 *              responsive while searching for a longer keyword.
	 * Inputs:      object:oSettings - dataTables settings object
	 *              integer:iDelay - delay in miliseconds
	 * Returns:     JQuery
	 * Usage:       $('#example').dataTable().fnSetFilteringDelay(250);
	 * Requires:	  DataTables 1.6.0+
	 *
	 * Author:      Zygimantas Berziunas (www.zygimantas.com) and Allan Jardine (v2)
	 * Created:     7/3/2009
	 * Language:    Javascript
	 * License:     GPL v2 or BSD 3 point style
	 * Contact:     zygimantas.berziunas /AT\ hotmail.com
	 */
	var
		_that = this,
		iDelay = (typeof iDelay == 'undefined') ? 250 : iDelay;

	this.each( function ( i ) {
		$.fn.dataTableExt.iApiIndex = i;
		var
			$this = this,
			oTimerId = null,
			sPreviousSearch = null,
			anControl = $( 'input', _that.fnSettings().aanFeatures.f );

			anControl.unbind( 'keyup' ).bind( 'keyup', function() {
			var $$this = $this;

			if (sPreviousSearch === null || sPreviousSearch != anControl.val()) {
				window.clearTimeout(oTimerId);
				sPreviousSearch = anControl.val();
				oTimerId = window.setTimeout(function() {
					$.fn.dataTableExt.iApiIndex = i;
					_that.fnFilter( anControl.val() );
				}, iDelay);
			}
		});

		return this;
	} );
	return this;
}

// Default options
var dataTableOptions = {
    'iDisplayLength': 10,
    'aLengthMenu': [5, 10, 20, 35, 50],
    'sDom': '<"H"f>t<"F"lrp>',
    'sPaginationType': 'four_button',
    'bAutoWidth': false,
    'bStateSave': true,
    'iCookieDuration': 86400*30,
    'sCookiePrefix': 'pingdom_',
    'bServerSide': true,
    'bProcessing': true,
    'fnServerData': function (sSource, aoData, fnCallback) {
        // Replace pagination with progress indicator
        $('.dataTables_paginate').hide();
        $('.dataTables_length').hide();
        $('.dataTables_processing').show();

        $.ajax({
            'dataType': 'json',
            'type': 'GET',
            'url': sSource,
            'data': aoData,
            'success': fnCallback,
            'error': function(jqXHR, textStatus, errorThrown) {
                // Hide progress indicator
                $('.dataTables_processing').hide();

                // Show error message in a td, wrapping the full length
                var ths = $('.dataTables_wrapper th').length;

                $('.dataTables_wrapper tbody').empty();
                $('.dataTables_wrapper tbody').append($('<tr><td colspan="' + ths + '">There was an error updating the page. Please try again later.</td></tr>'));
            }
        });
    },
    'fnDrawCallback': function () {
        // Replace progress indicator with pagination
        $('.dataTables_processing').hide();

        var settings = this.fnSettings();
        // Hide dropdown with "N rows per page" if there are fewer rows than the smallest N
        $('.dataTables_length').toggle(settings.aLengthMenu[0] < settings.fnRecordsDisplay());
        // Hide filter input box if all rows in database fit inside the smallest "N rows per page"
        $('.dataTables_filter').toggle(settings.aLengthMenu[0] < settings.fnRecordsTotal());
        // Hide pagination buttons if all displayed rows fit on the current page
        $('.dataTables_paginate').toggle(settings._iDisplayLength < settings.fnRecordsDisplay());

        // Show sorting triangles as Unicode characters
        $('.sorting .triangle').text('');
        $('.sorting_asc .triangle').text(' ▲');
        $('.sorting_desc .triangle').text(' ▼');

        $(window).trigger('datatable-draw');
    },
    oLanguage: {
        'sProcessing': 'Loading data...',
        'sLengthMenu': 'Show _MENU_ rows per page',
        'sZeroRecords': 'No matching rows found',
        'sSearch': 'Filter:',
        'oPaginate': {
            'sFirst':    '',
            'sPrevious': '',
            'sNext':     '',
            'sLast':     ''
        }
    }
};
