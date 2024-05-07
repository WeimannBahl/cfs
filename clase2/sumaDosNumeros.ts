import * as readlineSync from "readline-sync";

let primerNumero : number = readlineSync.questionInt( "Ingrese el primer numero: ");
console.log("el primer número es ", primerNumero);
let segundoNumero : number = readlineSync.questionInt( "Ingrese el segundo numero: ");
console.log("el segundo número es ", segundoNumero);
let resultado : number = primerNumero + segundoNumero;
console.log("La suma da", resultado);