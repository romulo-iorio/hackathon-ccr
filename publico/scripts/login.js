password = document.querySelector("input[name=password]").value;
let passwordPosition = password.length() - 1;

password.addEventListener("change", hidePassword)

function hidePassword(event){
    console.log(password[passwordPosition]);
    password[passwordPosition] = "*";
};
