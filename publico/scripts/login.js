const passwordInput = document.querySelector("input[name=password]");
let password = passwordInput.value;
let passwordPosition = password.length - 1;


passwordInput.addEventListener("input", hidePassword);

function hidePassword(event){
    password = passwordInput.value;
    passwordPosition = password.length - 1;
    event.target.value[passwordPosition] = "*";
};