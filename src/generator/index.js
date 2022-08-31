// Sintaxis para declarar una funcion generadora
function* gen() {
    // Los yield son la palabra clave reservada que
    // que es resultado que queremos obtener 
    yield 1;
    yield 2;
    yield 3;
}


// Declaramos una variable con la funcion generadora
const g = gen();
// Usamos el metodo next, una de las propiedades, para iterar
console.log(g.next().value); // Salida: 1
console.log(g.next().value); // Salida: 2
console.log(g.next().value); // Salida: 3

// Ejemplo de una funcion generadora para iterar un arreglo
function* iterable(array) {
    for (let value of array) {
        yield value;
    }
}

const iterate = iterable(["oscar", "omar", "ana", "lucia", "juan"]);
/* Imprimir solo .next() nos devolvera el siguiente objeto
   { value: 'oscar', done: false }

   Tiene dos valores, uno el valor, y otro done.
   Este ultimo nos indica que si queda otra yield por operar,
   siendo su valor true o false
*/
console.log(iterate.next()); // Salida
console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);

// .next().value sin yiels por operar, devuelve undefined