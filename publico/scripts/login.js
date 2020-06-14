passwordInput = document.querySelector("input[name=password]");

passwordInput.addEventListener("change", event =>{
    console.log(event.target.value.length)
    event.target.value[length - 1] = "*";
});
