form = document.querySelector('form');
sendFormButton = document.querySelector("button[id=send-form]")

sendFormButton.addEventListener("click", () => {form.submit()});