passwordInput = document.querySelector("input[name=password]");

passwordInput.addEventListener("change", hidePassword);

function hidePassword(event){
    passwordText = event.target.innerText;
    passwordText = "";
    passwordLength = passwordText.length();
    array.forEach(char => {
        passwordText += "*";
    });
}