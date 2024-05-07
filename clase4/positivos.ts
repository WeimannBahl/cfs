import * as readlineSync from "readline-sync";

let numero : number;
let totalPositivos : number = 0;
let totalReal : number = 0;

do {
    numero = readlineSync.questionInt("Ingrese un número: ")
    if (numero > 0) {
        totalPositivos++;
    } else if (numero == 0) {
        break;
    }
    totalReal++;
} while (numero != 0);

console.log(totalPositivos, "positivos en total,", (totalPositivos * 100 / totalReal), "% del total.");