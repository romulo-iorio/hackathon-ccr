passwordInput = document.querySelector("input[name=password]");
let passwordPosition = passwordInput.value.length - 1;

function handleInputChange(){
    console.log(passwordInput.value[passwordPosition]);
    passwordInput.value[passwordPosition] = "*";
};
