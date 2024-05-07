import * as readlineSync from "readline-sync";

let primerNumero : number = readlineSync.questionInt("Inserte un número: ")
let siguientesNumeros : number;
let numeroMaximo : number = primerNumero;
let numeroMinimo : number = primerNumero;
let promedio : number = primerNumero;
let contador : number = primerNumero;

do {
    siguientesNumeros = readlineSync.questionInt("Inserte un número: ")
    if (siguientesNumeros == 0) {
        break;
    } else if (siguientesNumeros > numeroMaximo) {
        numeroMaximo = siguientesNumeros;
    } else if (siguientesNumeros < numeroMinimo) {
        numeroMinimo = siguientesNumeros;
    }
    promedio += siguientesNumeros;
    contador++;
} while (primerNumero != 0 && siguientesNumeros != 0);

console.log("El número máximo es:", numeroMaximo, "\nEl número mínimo es:", numeroMinimo, "\nEl promedio de los números ingresados es:",promedio / contador,".");