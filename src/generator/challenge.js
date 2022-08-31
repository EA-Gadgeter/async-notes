import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI);
    return response.json();
}

/* Funcion generadora asincrona que hace varias peticiones a la API
   despues de cada peticion, regresamos info con yield

   IMPORTANTE, recordemos que en cada yield, la funcion regresa algo,
   y como estamos con una FUNCION ASINCRONA, REGRESA PROMESAS
*/
async function* anotherFunction(urlAPI) {
    try {
        const products = await fetchData(`${urlAPI}/products`);
        yield products[0];

        const product = await fetchData(`${urlAPI}/products/${products[0].id}`)
        yield product.title;

        const category = await fetchData(`${urlAPI}/categories/${product.category.id}`);
        yield category.name;
    } catch (error) {
        console.error(error);
    }
}

/*
Como REGRESA PROMESAS, tenemos que usar .then()
con destructuracion de bojetos podemos extraer el valor
value, que es lo que en realidad necesitamos
*/
const data = anotherFunction(API);
data.next()
    .then(({ value }) => {
        console.log(value);
    })
data.next()
    .then(({ value }) => {
        console.log(value);
    })
data.next()
    .then(({ value }) => {
        console.log(value);
    })

