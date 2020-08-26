// Google map

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -38.028306, lng: 176.344306 },
        zoom: 15,
    });
}
