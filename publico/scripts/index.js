var map, infoWindow;

navigateButton = document.getElementById("navigate");

function initMap() {
    var mapOpt = {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:15,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map'), mapOpt);
    infoWindow = new google.maps.InfoWindow;
    getPosition(map,infoWindow);
    // Try HTML5 geolocation.
}

function getPosition(map,infoWindow){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var marker = new google.maps.Marker({position: pos, map: map});

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
    } else {
    // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

navigateButton.addEventListener("click", handleButtonClick)

function handleButtonClick() {
    const center = map.getCenter()
    const lat = center.lat();
    const lng = center.lng(); 
    console.log({lat,lng});
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&dir_action=navigate`);
}
//