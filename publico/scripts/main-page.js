userPhoto = document.getElementById('photo-circle');
chat = document.getElementById('chat')
health = document.getElementById('health')
services = document.getElementById('services')
profile = document.getElementById('profile')
map =   document.getElementById('map')
logOut = document.getElementById('log-out')

userPhoto.addEventListener("click", redirectProfile);
profile.addEventListener("click", redirectProfile);
chat.addEventListener("click", redirectChat);
map.addEventListener("click", redirectMap);
health.addEventListener("click", redirectHealth);
services.addEventListener("click", redirectServices);
logOut.addEventListener("click", redirectLogout);

function redirectProfile() {
    window.location = "/profile";
}
function redirectChat() {
    window.location = "/chat";
}
function redirectHealth() {
    window.location = "/health";
}
function redirectServices() {
    window.location = "/services";
}
function redirectMap() {
    window.location = "/map";
}
function redirectLogout() {
    window.location = "/";
}