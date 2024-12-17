import {
  getProductsLocalStorage,
  setProductLocalStorage,
} from "../utils/Api.js";

export const MainPanier = () => {
    // localStorage.clear()
  const dataProductsPanier = getProductsLocalStorage();
  //   console.log(dataProductsPanier);

  // Exercice : afficher les bonnes données des produits en passant par l'objet dataProductsPanier (boucle | 1 ligne tr crée par tour de boucle), faire le calcul en fonction de la quantité et du prix du produit. Prévoir le calcul du montant total du panier.

  let content = '';
  let montantTotal = 0;
  for (const key in dataProductsPanier) {
    //  product réceptionne  un OBJET d'1 produit par tour de boucle.
    let product = dataProductsPanier[key];
    // console.log(dataProductsPanier[key]);
    // console.log(product);

    content += `
        <tr>
            <td>
            <img
                src="assets/images/products/${product.image}"
                class="picture__panier"
                alt="${product.name}"
            />
            </td>
            <td>${product.name}</td>
            <td>
            <div class="quantity__order">
                <a href="" class="link__icone__minus" data-id="${dataProductsPanier[key].id}">
                <i class="fa-solid fa-minus icone__minus"></i>
                </a>
                <p class="panier__quantity">${product.quantity}</p>
                <a href="" class="link__icone__plus" data-id="${dataProductsPanier[key].id}">
                <i class="fa-solid fa-plus icone__plus"></i>
                </a>
            </div>
            </td>
            <td>${product.price} €</td>
            <td>${parseFloat(product.quantity * product.price).toFixed(2)} €</td>
            <td>
            <a href="" data-id="${product.id}" class="icone__delete__item"
                ><i class="fa-solid fa-trash"></i
            ></a>
            </td>
        </tr>
    `;

    //  On additionne tous les quantité * par les prix du montant
    montantTotal += parseFloat(product.quantity * product.price);
  }

//   console.log(montantTotal);

  return `
        <main class="main__panier">
        <h2 class="title__h2">Votre panier</h2>
        <table class="table__order">
        ${content}
        <tr>
            <td>MONTANT TOTAL</td>
            <td></td>
            <td></td>
            <td></td>
            <td>${parseFloat(montantTotal).toFixed(2)} €</td>
        </tr>
        </table>

        </main>
`;
};
