import { getProductsLocalStorage } from "../utils/Api.js";

export const Nav = () => {

    // console.log(getProductsLocalStorage());
    const dataProductsPanier = getProductsLocalStorage ();

    let quantity = 0;

    for (const key in dataProductsPanier) {
        // console.log(dataProductsPanier[key].quantity);
        quantity += dataProductsPanier[key].quantity;
    }
    // console.log(quantity);
    
    return `
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <a href="index.html" class="nav__link">Home</a>
                </li>
                <li class="nav__item">
                    <a href="panier.html" class="nav__link">Panier</a>
                    <span class="nbProducts">${quantity}</span>
                </li>
            </ul>
        </nav>
    `;
}