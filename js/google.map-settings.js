// ==========  START GOOGLE MAP ========== //
function initialize() {
var myLatLng = new google.maps.LatLng(53.3585952,-6.2694788);

var mapOptions = {
    zoom: 16,
    center: myLatLng,
	disableDefaultUI: true,
	scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
    }
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
   
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: 'img/location-icon.png',
	  title: '',
  });
  
  var contentString = '<div style="max-width: 300px" id="content">'+
      '<div id="bodyContent">'+
	  '<h5 class="color-primary"><strong>Berkeley Hearing</strong></h5>' +
      '<p style="font-size: 12px">12 Berkeley Road, Opposite the Mater' +
      '.</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  var styledMapOptions = {
    name: 'US Road Atlas'
  };

  var usRoadMapType = new google.maps.StyledMapType(
      roadAtlasStyles, styledMapOptions);

  map.mapTypes.set('roadatlas', usRoadMapType);
  map.setMapTypeId('roadatlas');
}

google.maps.event.addDomListener(window, "load", initialize);
// ========== END GOOGLE MAP ========== //