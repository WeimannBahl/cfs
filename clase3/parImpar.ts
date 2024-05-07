import * as readlineSync from "readline-sync";

let numeroFinal : number = readlineSync.questionInt("Introduzca un número: ");

if (numeroFinal == 0) {
    console.log("El número introducido es 0.");
} else if (numeroFinal % 2 == 0){
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}