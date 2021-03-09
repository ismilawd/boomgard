    // ------------------------- side-pages-header -------------------------
    $('#search-bar').click(function () {

        if ($(".search-bar").hasClass('visible')) {
            $(".search-bar").removeClass("visible");
            $(".search-bar").addClass("not-visible");
        } else {
            $(".search-bar").removeClass("not-visible");
            $(".search-bar").addClass("visible");
        }
    });
    // ------------------------- end of side-pages-header -------------------------

var myMap = new L.Map('ContactUs-map', {
    key: 'web.LUBckXJxcmgkjfgttgFwxukCeHKVbOwWI7934TAh',
    maptype: 'dreamy',
    center: [35.699739, 51.338097],
    zoom: 13,
    poi: true,
    zoomControl: false,
});
L.control.zoom({
    position: 'topright'
}).addTo(myMap);


icon = L.divIcon({
    className: 'marker',
    html: "<div class='marker'><div class='icon'><div class='back'><i class='material-icons'>border_all</i></div></div></div>",
    iconSize: [24, 24],
    iconAnchor: [12, 24]
});

L.marker([35.699739, 51.338097], { icon: icon }).addTo(myMap);


