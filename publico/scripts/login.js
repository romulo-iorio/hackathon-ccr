passwordInput = document.querySelector("input[name=password]");

passwordInput.addEventListener("change", hidePassword);

function hidePassword(){
    let passwordText = passwordInput.value;
    console.log(passwordText)
    passwordText = "";
    passwordText = "*";
}

