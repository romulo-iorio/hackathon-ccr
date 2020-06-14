passwordInput = document.querySelector("input[name=password]");

passwordInput.addEventListener("change", hidePassword);

function hidePassword(event){
    let passwordText = event.target.value;
    console.log(passwordText)
    passwordText = "";
    passwordText = "*";
}

