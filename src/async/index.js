const asyncFunction = () => {
    /* Creamos una promesa para probar las funciones async/await,
    recordemos que FACILITAN su uso y escritura*/
    return new Promise((resolve, reject) => {
        // Con un operador ternario forzamos el resolve
        (true)
            // Hacemos que tarde 2 segundos el resolve con setTimeout()
            ? setTimeout(() => resolve("Async!!"), 2000)
            : reject(new Error("Error"));
    });
};

// Funcion asincrona, para NO DETENDRA el resto del programa mientras se ejecuta
const anotherFunction = async () => {
    /*
        Las asignacion de "something" ESPERA (await) que asyncFunction() regrese algo.

        Debido a que ESPERA, los siguientes console.log()
        NO SE EJECTUARAN hasta que asyncFunction() termine.

        Que pasa si NO ESPERAMOS a asyncFunction()?
        Como estamos intentando imprimir en consola something, y este no va tener valor hasta dentro de
        2 segundos, se imprimira en consola lo siguiente.

        Before
        Promise { <pending> }
        Hello
        After

        Aunque en una aplicacion de verdad probablemente genere un error....
    */
    const something = await asyncFunction();
    console.log(something);
    console.log("Hello");
};

console.log("Before");
anotherFunction();
console.log("After");

/*
Salida: 

Before
After
Async!!
Hello

Como usamos async/await donde es necesario, el flujo de "MAIN" continua
y hasta despues de los 2 segundos, se imprime el resto.
*/
