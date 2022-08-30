import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";


// Funcion para realizar una peticion POST en lugar de GET
function postData(urlAPI, data) {
    /* Por defecto fetch() realiza GET, necesitamos pasarle un JSON
    con la configuracion adecuda*/
    const response = fetch(urlAPI, {
        method: "POST", // Metodo HTTP a usar
        mode: "cors", // Permitimos solicitudes de origen cruzado.
        credentials: "same-origin", // La identificacion a usar es este mismo orgien
        headers: {  // Le indicamos que el contenido es tipo JSON
            "Content-Type": "application/json",
        },
        // El contenido en si, lo convertimos a string para poder mandarlo
        body: JSON.stringify(data),
    });
    return response; // Regresamos la promesa con la respuesta a la peticion
}

// Funcion para realizar una peticion DELETE en lugar de GET
function deleteData(urlAPI) {
    return fetch(urlAPI, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
    });
}

// Creamos el objeto a enviar, segun la documentacion de Platzi Fake Store API
const data = {
    "title": "212",
    "price": 212,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
};

postData(`${API}/products/`, data)
    // Simplemente damos formato e imprimimos la respuesta que nos dio el API
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

deleteData(`${API}/products/202`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));