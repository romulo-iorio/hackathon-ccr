const passwordInput = document.querySelector("input[name=password]");
let password = passwordInput.value;
let passwordPosition = password.length - 1;

passwordInput.addEventListener("change", hidePassword);

function hidePassword(event){
    console.log(passwordInput)
    console.log(password);
    console.log(passwordPosition);
    console.log(password[passwordPosition]);
    password[passwordPosition] = "*";
};
