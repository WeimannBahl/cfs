import * as readlineSync from "readline-sync";

let primerNumero : number = readlineSync.questionInt("Introduzca el primer número: ");
let segundoNumero : number = readlineSync.questionInt("Introduzca el segundo número: ");
let total : number = 0;

for (let i : number = primerNumero; i < segundoNumero + 1; i++) {
    total += primerNumero;
    primerNumero++;
}

console.log(total); 