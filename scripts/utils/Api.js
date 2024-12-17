const BASE_URL = 'data/data.json';
export const getData = async () => {
    try {
        //  fetch permet de récupérer des données en fonction d'une adresse URL, fetch envoi une requete http dans le fichier data.json afin de récupérer toutes les données du fichier.
        const response = await fetch(BASE_URL);

        return response.json();
    }catch (error) {
        return new Error("Quelque chose ne va pas");
    }
}

export const getProducts = async () => {
    const data = await getData();
    return data.products;
}

export const getProductById = async () => {
    //  window.location.search permet de récupérer les paramètres de recherche dans l'URL (exemple : "id=243").
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    //  Permet de récupérer uniquement la valeur de l'indice ?id= dans l'URL.
    const id = urlParams.get('id');
    const products = await getProducts();

    //  filter : fonction qui permet de filtrer un résultat en fonction d'une condition.
    const data = products.filter((product) => {

        //  Si l' "id" du produit est égal à l' "id" du produit dans l'URL (?id=243), alors on retourne le produit.
        if(product.id == id){
            return product;
        };
    });

    return data[0];
};

export const  setProductLocalStorage = (id, arrayProduct) => {
    localStorage.setItem(id, arrayProduct);
}

export const getProductsLocalStorage = () => {
    // console.log(localStorage);

    //  Raccourci permettant de rassember les données du localStorage en un seul objet JavaScript.
    const items = {...localStorage}
    // console.log(items);

    let itemsPanier = {};
    for(const key in items) {
        // console.log(key);
        // console.log(items[key]);
        // JSON.parse permet de convertir la chaine de caractères des données de chaque produit en un objet JavaScript que nous pouvons manipuler dans le panier pour afficher les données.
        itemsPanier[key] = JSON.parse(items[key]);
    }

    // console.log(itemsPanier);
    return itemsPanier;
}