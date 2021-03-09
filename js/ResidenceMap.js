var myMap = new L.Map('Residence-map', {
    key: 'web.LUBckXJxcmgkjfgttgFwxukCeHKVbOwWI7934TAh',
    maptype: 'dreamy',
    center: [35.699739, 51.338097],
    zoom: 13,
    poi: true,
    zoomControl: false,
    gestureHandling: true
});

var circle = L.circle([35.699739, 51.338097], {
    color: '#ee3b51',
    fillColor: '#fff',
    fillOpacity: 0.8,
    radius: 900,
    weight: 2,
}).addTo(myMap);

icon = L.divIcon({
    className: 'marker',
    html: "<div class='marker'><div class='icon'><div class='back'><i class='material-icons'>border_all</i></div></div></div>",
    iconSize: [24, 24],
    iconAnchor: [12, 24]
});

L.marker([35.699739, 51.338097], {
    icon: icon
}).addTo(myMap);



//disable default scroll 
//myMap.scrollWheelZoom.disable();
//
//$('#Residence-map').bind('mousewheel DOMMouseScroll', function (event) {
//    event.stopPropagation();
//    if (event.ctrlKey == true) {
//        event.preventDefault();
//        myMap.scrollWheelZoom.enable();
//        $('#Residence-map').removeClass('map-scroll');
//        setTimeout(function () {
//            myMap.scrollWheelZoom.disable();
//        }, 1000);
//    } else {
//        myMap.scrollWheelZoom.disable();
//        $('#Residence-map').addClass('map-scroll');
//    }
//
//});
//
//$(window).bind('mousewheel DOMMouseScroll', function (event) {
//    $('#Residence-map').removeClass('map-scroll');
//})
