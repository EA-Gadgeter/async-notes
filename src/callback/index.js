function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));


/*
Callback es un callback integrado en JS por defecto, recibe
una funcion y el tiempo en ms que tardara en ejecutar la funcion. 
*/

setTimeout(function (){
    console.log("Hola JavaScript");
}, 2000);


function gretting(nombre) {
  console.log(`Hola ${nombre}`);
}

setTimeout(gretting, 2000, "Chino");