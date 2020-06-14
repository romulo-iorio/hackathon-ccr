passwordInput = document.querySelector("input[name=password]");

passwordInput.addEventListener("change", hidePassword);

function hidePassword(){
    console.log(passwordInput.value)
    passwordInput.value = "";
    passwordInput.value = "*";
}

