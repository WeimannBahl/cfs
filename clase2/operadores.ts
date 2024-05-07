import * as readlineSync from 'readline-sync';

let numero1 : number = readlineSync.questionInt("Introduzca un numero: ");
let numero2 : number = 25;
let numero3 : number = 55;

console.log(numero1 % numero2);