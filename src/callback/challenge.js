const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

// Creamos una funcion que recibe una urlApi y un callback.
function fetchData(urlApi, callback) {
	let xhttp = new XMLHttpRequest(); // Nueva instancia de XMLHttpRequest

	// Preparamos una peticion de tipo GET, ya que queremos traer informacion
	xhttp.open("GET", urlApi, true); // Protocolo, url, asincrono o no

	/* 
	.onreadystatechange es un eventHandler para cuando la propiedad .readyState,
	esta ultima nos dice el estado de la peticion
	*/
	xhttp.onreadystatechange = function (event) {
		/* 
	Si la peticion ya se completo, checamos si todo esta bien, si todo esta bien
	nuestro callback parsea la informacion de XML
	a JSON con JSON.parse(xhttp.responseText)

	Si algo sale mal, nuestro callback arroja un error
	*/
		if (xhttp.readyState === 4) {
			if (xhttp.status === 200) {
				callback(null, JSON.parse(xhttp.responseText)); // Error, respuesta
			} else {
				const error = new Error("Error" + urlApi); // Creamos un erro para el URL
				return callback(error, null);
			}
		}
	};
	// Enviamos la peticion
	xhttp.send();
}

/*
Haremos nuestra primera peticion, recordemos que tenemos que pasarle
a fetchData un urlApi y un un callback, que en esta ocasion, es una
funcion anonima.

`${API}/products` es la forma de acceder a todos los productos, segun la
documentacion del API de Platzi Fake Store. Es una de lista de JSONs.

La funcion anonima recordemos que ocupas 2 parametros segun como la
utilizamos en fetchData, el ERROR, y la INFO que parseamos de XML a JSON

La misma funcion fetchData se encarga de asignarle valor a error1 y data1
*/
fetchData(`${API}/products`, function (error1, data1) {
	// Si hay un error, lo imprimimos en consola
	if (error1) return console.error(error1);

	/*
	Despues de nuestra primera llamada a fetchData, data1 es una lista con
	todos los JSON de los productos, accdemos al primer producto con data1[0]

	La nueva peticion es para traer un producto en especifico, la cual
	segun la documentacion del API, podemos hacerlo agregando el ID del producto
	como parametro al URL base `${API}/products/${data1[0].id}`
	*/
	fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
		if (error2) return console.error(error2);

		/*
		Ahora data2 es un JSON de un producto, nuestra ultima peticion va a ser
		intentar acceder a la categoria del producto. 
		Segun la documentacion del API, podemos hacerlo agregando el ID de la categoria
		como parametro al URL base, uede que este no exista, ni category, por lo que 
		usamos el optional chaining. `${API}/categories/${data2?.category?.id}`,
		*/
		fetchData(
			`${API}/categories/${data2?.category?.id}`,
			function (error3, data3) {
				if (error3) return console.error(error3);

				// Finalmente imprimimos el producto, su titulo, y el nombre de su categoria
				console.log(data1[0]);
				console.log(data2.title);
				console.log(data3.name);
			},
		);
	});
});
