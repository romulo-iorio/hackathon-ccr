let speed = geolocationCoordinatesInstance.speed
let calculatedSpeed = 0

const gpsTracking = navigator.geolocation.watchPosition(changePos, getPosError);
let startGpsPos = navigator.geolocation.getCurrentPosition();
let currentGpsPos = 0;
let options = {};
let currentTime = Date.now();
let startTime = Date.now();;
let dist = 0;
let elapsedTime = 0

function getPosError(err) {
    console.log(err);
}

function changePos(pos) {
    currentGpsPos = pos;
    currentTime = Date.now();
    const currentLat = currentGpsPos.coords.latitude;
    const currentLng = currentGpsPos.coords.longitude;
    const startLat = startGpsPos.coords.latitude;
    const startLng = startGpsPos.coords.longitude;
    dist = calculateDistance(currentLat, currentLng, startLat, startLng)
    elapsedTime = currentTime - startTime;
    calculatedSpeed = calculateSpeed(dist, elapsedTime);
    console.log(`Speed by API: ${speed}`);
    console.log(`Calculated speed: ${calculatedSpeed}`);
    startGpsPos = currentGpsPos;
    startTime = currentTime;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = (lat2 - lat1).toRad();
    var dLon = (lon2 - lon1).toRad(); 
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
            Math.sin(dLon / 2) * Math.sin(dLon / 2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
    var d = R * c;
    return d;
}
    Number.prototype.toRad = function() {
    return this * Math.PI / 180;
}

function calculateSpeed(dist,elapsedTime) {
    return dist/elapsedTime;
}

options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};