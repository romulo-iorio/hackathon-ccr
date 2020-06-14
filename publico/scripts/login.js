passwordInput = document.querySelector("input[name=password]");
let passwordLength = passwordInput.value.length;

function handleInputChange(){
    console.log(passwordInput.value[passwordLength - 1]);
    passwordLength.value[passwordLength - 1] = "*";
});
