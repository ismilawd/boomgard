$(document).ready(function () {

    var h_main_box = $(".tab-residence").height();
    var h_content = h_main_box - 120;
    $(".tab-content").css({
        "height": h_content
    });

    //------------------------- panel-location  ------------------------------

    var myMap1 = new L.Map('location-map', {
        key: 'web.LUBckXJxcmgkjfgttgFwxukCeHKVbOwWI7934TAh',
        maptype: 'dreamy',
        center: [35.699739, 51.338097],
        zoom: 12,
        poi: true,
        zoomControl: false,
    });
    icon = L.divIcon({
        className: 'marker',
        html: "<div class='marker'><div class='icon'><div class='back'><i class='material-icons'>border_all</i></div></div></div>",
        iconSize: [24, 24],
        iconAnchor: [12, 24]
    });

    L.marker([35.699739, 51.338097], {
        icon: icon
    }).addTo(myMap1);
    L.control.zoom({
        position: 'bottomright'
    }).addTo(myMap1);

    var map_loc = $(".tab-content.location .inner-location .detailes-loc").outerHeight();
    map_loc = (h_content - map_loc) - 150;
    $(".tab-content.location .inner-location .location-map").css({
        "height": map_loc
    })

    //------------------------- //panel-location// ------------------------------

});
