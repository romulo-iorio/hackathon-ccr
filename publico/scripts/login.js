passwordInput = document.querySelector("input[name=password]");

passwordInput.addEventListener("change", hidePassword);

function hidePassword(event){
    console.log("mudou!")
    passwordText = event.target.innerText;
    passwordText = "";
    passwordText = "*";
}

