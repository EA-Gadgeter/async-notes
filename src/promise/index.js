//Estrucutra basica de una promesa
const promise = new Promise((resolve, reject) => {
    resolve("hey!"); // La promesa se cumple
    reject("Bye!"); // La promesa no se cumple
});


// Ejemplo con vacas, necesitamos X cantidad para cumplir la produccion
const cows = 15;

const countCows = new Promise((resolve, reject) => {
    /* Si tenemos mas de 10 vacas, la promesa se cumple, y el resolve
    pasa a tener el valor del string*/
    if (cows > 10) {
        resolve(`Tenemos ${cows} vacas en la granja, podemos cumplir la produccion`);
    } else { // En caso contrario, se rechaza la promesa
        reject("No hay suficientes vacas en la granja");
    }
});

/*
Usamos una promesa de la siguiente manera, en .then podemos crear 
una funcion anonima de lo que se va a realizar si se cumple la proemsa 
*/
countCows.then((result) => {
    console.log(result);

    /*
    Usamos .catch y una funcion anonima de lo que se va a realizar si 
    NO se cumple la proemsa 
    */
}).catch((error) => {
    console.log(error);

    /*
    Usamos .finally con una funcion anonima si queremos realizar algo,
    independientemente del resultado
    */
}).finally(() => {
    console.log("Finalmente...");
})