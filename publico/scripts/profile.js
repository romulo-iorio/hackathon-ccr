userPhoto = document.querySelector('#photo-circle');
chat = document.querySelector('#chat')
health = document.querySelector('#health')
services = document.querySelector('#services')
profile = document.querySelector('#profile')
map =   document.querySelector('#map')
logOut = document.querySelector('#log-out')

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
