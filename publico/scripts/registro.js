const imageInput = document.querySelector("input[name=image]");
const imageLabel = document.querySelector("label[for=image]");
const imageIcon  = document.getElementById("input-image-icon");
const imageSample = document.getElementById("image-sample");
const imageShow = document.getElementById("image-modal");
let imageChosen = 0;

imageLabel.addEventListener("click", imageLabelClick);

function imageLabelClick(){
    imageInput.click();
    imageIcon.src = "../img/camera.svg";
    imageLabel.style = "background: #F0F0F5";
    imageChosen = 0;
}

imageInput.addEventListener("input", () => {
    if(imageInput.value != 0){
        alert("Imagem registrada no formulário! Passe o mouse por cima do ícone para ver a imagem, ou clique novamente nele para fazer upload de uma nova imagem")
        imageIcon.src = "../img/checked.svg";
        imageSample.src = URL.createObjectURL(imageInput.files[0]);
        console.log(imageInput.value)
        console.log(imageInput.files[0]);
        imageLabel.style = "background: #e8f0fe";
        imageChosen = 1;
    }
});

imageLabel.addEventListener("mouseenter", () => {
    if(imageChosen == 1){
        imageShow.classList.remove("hide");
    }else{
        imageShow.classList.add("hide");
    }
});

imageLabel.addEventListener("mouseleave", () => {
    if(imageChosen == 1){
        imageShow.classList.add("hide");
    }else{
        imageShow.classList.add("hide");
    }
});

password = document.querySelector("input[id=password]");
passwordRepeat = document.querySelector("input[id=password-repeat]");
buttonSendForm = document.querySelector("button[id=send-form]");

password.addEventListener("change", passwordValidation);
passwordRepeat.addEventListener("change", passwordValidation);

function passwordValidation(event) {
    if(password.value == passwordRepeat.value){
        buttonSendForm.disabled = false;
    }else{
        alert("As duas senhas não coincidem!");
    }
}