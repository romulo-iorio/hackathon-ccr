passwordInput = document.querySelector("input[name=password]");

passwordInput.addEventListener("change", event =>{
    let passwordLength = event.target.value.length();
    console.log(passwordLength);
    event.target.value[passwordLength - 1] = "*";
});
