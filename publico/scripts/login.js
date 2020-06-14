const passwordInput = document.querySelector("input[name=password]");
let password = passwordInput.value;
let passwordPosition = password.length - 1;


passwordInput.addEventListener("input", hidePassword);

function hidePassword(){
    passwordInput.value = "*";
};