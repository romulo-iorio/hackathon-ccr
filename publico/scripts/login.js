passwordInput = document.querySelector("input[name=password]");

// passwordInput.addEventListener("change", event =>{
//     let passwordLength = event.target.value.length;
//     console.log(event.target.value[passwordLength - 1]);
//     event.target.value[passwordLength - 1] = "*";
// });
let passwordLength = passwordInput.value.length;
console.log(passwordInput.value[passwordLength - 1]);
