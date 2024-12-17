import { getProducts } from '../utils/Api.js';
import { Header } from '../components/Header.js';
import { Nav } from '../components/Nav.js';
import { Main } from '../components/Main.js';
import { Footer } from '../components/Footer.js';


const displayData = (data) => {
    const body = document.querySelector('body');
    body.innerHTML = `
        <div class="container">
        ${Header()}
        ${Nav()}
        ${Main(data)}
        ${Footer()}
        </div>
    `;
}

//  Fonction asynchrone anonyme qui s'exécute automatiquement au chargement de la page index.
(async () => {
    //  On execute la fonction displayData pour avoir un retour visuel sur la page web.

    const data = await getProducts();
    //  On transmets les données du produits à la fonction displayData afin que les dispatcher dabs les différebts composans (Main()).
    displayData(data);
})();