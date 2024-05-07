import * as readlineSync from "readline-sync";

let primerNumero : number = readlineSync.questionInt("Inserte el numero que va a multiplicar: ");
let segundoNumero : number = readlineSync.questionInt("Hacer la tabla desde el 1 hasta..: ");

for (let i : number = 1; i < segundoNumero + 1; i++) {
    console.log(primerNumero, "x", i, "=", i * primerNumero);
}