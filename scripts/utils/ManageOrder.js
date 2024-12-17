import { setProductLocalStorage, getProductsLocalStorage } from "../utils/Api.js";

export const AddProductPanier = (data) => {
    // console.log(data);
    const buttonAddPanier = document.querySelector('.button__panier');
    // console.log(buttonAddPanier);
    buttonAddPanier.addEventListener('click', (event) => {
        event.preventDefault();
        const quantity = parseInt(document.querySelector('.quantity').value);

        const dataProduct = {
            id: data.id,
            name: data.name,
            quantity: quantity,
            price: data.price,
            image: data.image
        }

        //  Si l'ID du produit est existant dans le localStorage, donc le produit est présent dan sle panier, on entre dans la condition IF.
        if(getProductsLocalStorage().hasOwnProperty(data.id)) {
            // console.log('produit existant dans le localStorage');

            //  On ajoute à la quantité initiale du produit (getProductsLocalStorage()[data.is].quantity) avec la quatité sélectionné sur la page (quantity).
            dataProduct.quantity = getProductsLocalStorage()[data.id].quantity + quantity;

            console.log(dataProduct);
        }

        // localStorage.setItem (243, {dataProduct})
        setProductLocalStorage(data.id, JSON.stringify(dataProduct));
    });
};

export const RemoveItemPanier = () => {
    // console.log('RemoveItemPanier');

    const buttonValidateRemoveItem = document.querySelector('.button__remove');
    buttonValidateRemoveItem.addEventListener('click', () => {
        event.preventDefault();
        
        const id = buttonValidateRemoveItem.getAttribute('data-id');
        // console.log(id);
        //  On supprime le produit du localStorage à l'id 
        localStorage.removeItem(id);
        //  Permet de recherger ma page au bout de 800mini-seconde
        setTimeout(() => {
            window.location.reload();
        }, "800");
    });
};

export const AddQuantityPanier = () => {
    // console.log('AddQuantityPanier');

    const linksIconePlus = document.querySelectorAll('.link__icone__plus');
    linksIconePlus.forEach((link) => {
        // console.log(link);
        link.addEventListener('click', (event) => {
            // event.preventDefault();
            
            const id = link.getAttribute('data-id');
            const productPanier = localStorage.getItem(id);
            let parseOject = JSON.parse(productPanier);
            parseOject.quantity = parseOject.quantity + 1
            const stringifyObject = JSON.stringify(parseOject);
            setProductLocalStorage(id, stringifyObject);

            // console.log(id);
            // console.log(parseOject);
        })
    })
}

export const RemoveQuantityPanier = () => {
    // console.log('RemoveQuantityPanier');

    const linksIconeMinus = document.querySelectorAll('.link__icone__minus');
    linksIconeMinus.forEach((link) => {
        link.addEventListener('click', (event) => {
            // event.preventDefault();

            const id = link.getAttribute('data-id');
            const dataProduct = localStorage.getItem(id);
            let parseOject = JSON.parse(dataProduct);

            if(parseOject.quantity == 1) {
                link.classList.add('user__select');
            } else {
                parseOject.quantity = parseOject.quantity - 1;
                const stringifyObject = JSON.stringify(parseOject);
                setProductLocalStorage(id, stringifyObject);
            }
        })
    })
}

export const RemoveAllProductsPanier = () => {
    // console.log('RemoveAllProductsPanier');

    const buttonDeleteCart = document.querySelector('.button__delete__cart');
    buttonDeleteCart.addEventListener('click', () => {
        // alert('test');

        localStorage.clear();
    })
}