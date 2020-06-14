const card = document.querySelector('div[name=ambev]');
const modal = document.getElementById('modal-promocao');

card.addEventListener('click', iniciaModal);

function iniciaModal() {
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (event) => {
            if(event.target.id == "modal-promocao" || event.target.className == 'fechar') {
                modal.classList.remove('mostrar');
                // localStorage.fecharModal = modalId;
            }
        });
    }
}