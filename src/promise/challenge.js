import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlAPI) {
    return fetch(urlAPI);
}

// /* Por defecto, fetch es una promesa, por lo que podemos emepezar a usar
// las palabras reservadas */
// fetchData(`${API}/products`)
//     /* Podemos agregar varios .then, en el primero, si todo salio bien,
//     parseamos la respuesta a JSON*/
//     .then(response => response.json())
//     // Ahora simplemente imprimimos los productos
//     .then(products => {
//         console.log(products);
//     })
//     // Si hay un error, lo imprimios en consola
//     .catch(error => console.log(error));


fetchData(`${API}/products`)
    // Primera peticion, que tiene la lista de los productos, pasamos a JSON
    .then(response => response.json())
    .then(products => {
        // Ya como JSON, imprimimos el primer producto
        console.log(products[0]);
        // Otra peticion, pero esta vez de para traer el primer producto
        return fetchData(`${API}/products/${products[0].id}`)
    })
    // Nos trae el primer producto, lo pasamos a JSON
    .then(response => response.json())
    .then(product => {
        // Imprimimos el titulo del producto
        console.log(product.title);
        // Ultima peticion, a la categoria del producto
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    // Categoria del producto, la pasamos a JSON
    .then(response => response.json())
    .then(productCategory => {
        // Imprimos la el nombre de de la categoria del producto
        console.log(productCategory.name);
    })
    .catch(error => console.log(error)) // En caso de error
    // Aviamos que todas las peticiones se han completado
    .finally(() => console.log("Peticiones terminadas"));