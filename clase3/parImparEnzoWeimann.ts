import * as readlineSync from "readline-sync";

let numero : number = readlineSync.questionInt("Ingrese valor a evaluar: ");

if (numero == 0) {
    console.log("Ha ingresado el número 0.");
} else if (numero % 2 == 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}