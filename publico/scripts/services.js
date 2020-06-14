const card = document.querySelector('#item1');

card.addEventListener('click', () => iniciaModal('modal-promocao'));

function iniciaModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (event) => {
            if(event.target.id == modalId || event.target.className == 'fechar') {
                modal.classList.remove('mostrar');
                // localStorage.fecharModal = modalId;
            }
        });
    }
}