HTMLWidgets.widget({

  name: 'FranceMapWidget',

  type: 'output',

  initialize: function(el, width, height) {

    $(".container").append("<div id='francemap123' style = 'width: 700px; height: 600px;display:inline-block'></div>");
    return {
      // TODO: add instance fields as required

    }

  },

  renderValue: function(el, x, instance) {

    $(document).ready(function() {

    $( ".infos" ).remove();
    $( ".jqvmap-label" ).remove();


    var infoBox = $("<div></div>");
    infoBox.addClass("infos");
    /*txt3.hide();*/
    $(".container").append(infoBox);

    var infoHeader = $("<div></div>");
    infoHeader.addClass("infosHeader");
    $(".infos").append(infoHeader);


    var infoBody = $("<div></div>");
    infoBody.addClass("infoBody");
    $(".infos").append(infoBody);

    $( ".infosHeader" ).append( document.createTextNode( x.region ) );
    $( ".infoBody" ).empty();
    $('.infoBody').append(ConvertJsonToTable(x.table, 'Franceinfos', null, 'Download'));

		$('#francemap123').vectorMap({
		  map: 'france_fr',
			hoverOpacity: 0.5,
			hoverColor: false,
			backgroundColor: "#ffffff",
			colors: couleurs,
			borderColor: "#000000",
			selectedColor: "#EC0000",
			enableZoom: false,
			showTooltip: true,
		    onRegionClick: function(element, code, region)
		    {
         /*txt3.toggle();*/
         $( ".infosHeader" ).empty();
         $( ".infosHeader" ).append( document.createTextNode( region ) );
         document.getElementById("FranceMapformcontrol1234567").value = region;
         $("#FranceMapformcontrol1234567").change();
		    }
		});

	});

  /*$(function () { $('.popover-hide').on('hide.bs.popover', function () {
      $(this).popover('destroy');
   })});*/

  },

  resize: function(el, width, height, instance) {

  }

});
