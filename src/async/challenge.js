import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

// Funcion asincrona para hacer llamadas al API con fetch
//  y que devuelve la respuesta en formato JSON
async function fetchData(urlAPI) {
    // Esperamos a que fetch devuelve la informacion
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
};

// Funcion asincrona que hace varias peticiones a la API
// e imprime la informacion en consola
const anotherFunction = async (urlApi) => {
    // Usamos un try/catch en caso de que alguna de las peticiones
    // se rechaze, o ocurra algun otro tipo de error
    try {
        // Por cada llamada realizamos un await
        const products = await fetchData(`${urlApi}/products`); // Todos los productos

        // Peticiones directa del primer producto de la lista por medio del ID
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);

        // Categoria del producto
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        // Imprimimos:
        console.log(products[0]); // Primer producto
        console.log(product.title); // Nombre del primer producto
        console.log(category.name); // Nombre de su categoria
    } catch (error) {
        console.error(error);
    }
}

// Llamamos a la funcion asincrona
anotherFunction(API);
console.log("Hola");