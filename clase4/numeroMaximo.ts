import * as readlineSync from "readline-sync";

let numero : number;
let comparacion : number = 0;

do {
    numero = readlineSync.questionInt("Ingrese un número: ")
    if (numero > comparacion) {
        comparacion = numero;
    }
} while (numero != 0);

console.log("El número máximo es:", comparacion);