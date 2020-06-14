passwordInput = document.querySelector("input[name=password]");

passwordInput.addEventListener("input", hidePassword);

function hidePassword(event){
    console.log("mudou!")
    passwordText = event.target.value;
    passwordText = "";
    passwordText = "*";
}

