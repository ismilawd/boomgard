var myMap = new L.Map('search-map', {
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



var firstIcon = L.divIcon({
    className: 'marker',
    html: "<span id='first' class='icon' data-rel='first'>123</span>",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    id: ["hey"]
});

var secondIcon = L.divIcon({
    className: 'shit',
    html: "<span id='second' class='icon' data-rel='second'>128</span>",
    iconSize: [24, 24],
    iconAnchor: [12, 24]
});

var thirdIcon = L.divIcon({
    className: 'marker',
    html: "<span id='third' class='icon' data-rel='third'>250</span>",
    iconSize: [24, 24],
    iconAnchor: [12, 24]
});

var forthIcon = L.divIcon({
    className: 'marker',
    html: "<span id='forth' class='icon' data-rel='forth'>24</span>",
    iconSize: [24, 24],
    iconAnchor: [12, 24]
});

L.marker([35.690000, 51.338097], { icon: firstIcon }).addTo(myMap);
L.marker([35.673200, 51.348097], { icon: secondIcon }).addTo(myMap);
L.marker([35.710000, 51.358097], { icon: thirdIcon }).addTo(myMap);
L.marker([35.660000, 51.368097], { icon: forthIcon }).addTo(myMap);


// $('.icon').on('click', function () {
//     if ($(this).attr("id") == $(".popular-inner").attr("data-marker")) {
//         value = $(this).attr("id");
//         console.log("#" + value);
//         $("#" + value).addClass('active');
//     } else {

//     }
// });


$('.icon').on('click mouseover', function (e) {
    $(".popular-inner").removeClass("active");
    $("#" + $(this).data("rel")).toggleClass('active');

});

$('.icon').on('click mouseleave', function (e) {
    $(".popular-inner").removeClass("active");


});






// $('.popular-inner').on('click', function (e) {

//     $(".icon").removeClass("active");
//     $($(this).data("marker")).toggleClass('active');
// });






















