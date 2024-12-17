export const Modal = () => {
    return `
        <div class="modal">
            <h1 class="modal__title">Voulez-vous réellement supprimer ce produit ?</h1>
            <button class="button__remove">CONTINUER</button>
        </div>
    `;
}

export const ModalIn = () => {
    // console.log('ModalIn');

    const iconesDeleteItem = document.querySelectorAll('.icone__delete__item');
    const modal = document.querySelector('.modal');
    const buttonValidateRemoveItem = document.querySelector('.button__remove');
    iconesDeleteItem.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            modal.classList.add('modalIn');
            const id = item.getAttribute('data-id');
            // console.log(id);
            // console.log(modal.children);
            modal.children[0].innerText = 'Voulez-vous réellement suppriùer ce produit ?';
            buttonValidateRemoveItem.setAttribute('data-id', id);
        })
    })
}