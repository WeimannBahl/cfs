import * as readlineSync from "readline-sync";

let dado : number = 6;
let numeroUsuario: number = readlineSync.questionInt("Ingrese la cantidad de dados a tirar: ");
let resultado : number = 1;

for (let i : number = 0; i < numeroUsuario; i++) {
    resultado *= dado;
}

console.log("La posibilidad de sacar el mismo número en todos los dados es de 1 en", resultado);