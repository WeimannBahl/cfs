import * as readlineSync from "readline-sync";

let operacion : number;
do {
    operacion = readlineSync.questionInt("Presione 1 para sumar.\nPresione 2 para restar.\nPresione 3 para multiplicar.\nPresione 4 para dividir.\n")
} while (operacion != 1 && operacion != 2 && operacion != 3 && operacion != 4);

let numero1 : number = readlineSync.questionInt("Inserte el primer número: ")
let numero2 : number = readlineSync.questionInt("Inserte el segundo número: ")

let resultadoFinal = calculo(numero1, numero2, operacion);

function calculo(primerNumero : number, segundoNumero : number, operador : number) : number {
    let resultado : number = 0;
    if (operador == 1) {
        return resultado = primerNumero + segundoNumero;
    } else if (operador == 2) {
        return resultado = segundoNumero - primerNumero;
    } else if (operador == 3) {
        return resultado = primerNumero * segundoNumero;
    } else {
        return resultado = primerNumero / segundoNumero;
    }
}

console.log (resultadoFinal);