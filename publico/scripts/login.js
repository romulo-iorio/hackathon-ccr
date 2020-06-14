const passwordInput = document.querySelector("input[name=password]");

passwordInput.addEventListener("keydown", hidePassword);

function hidePassword(){
    passwordInput.value[passwordInput.value.length] = "*";
};