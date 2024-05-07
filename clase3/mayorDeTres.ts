import * as readlineSync from "readline-sync";

let primerNumero : number = readlineSync.questionInt("Ingrese un n\úmero: ");
let segundoNumero : number = readlineSync.questionInt("Ingrese otro n\úmero: ");
let tercerNumero : number = readlineSync.questionInt("Ingrese otro n\úmero: ");

if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
        console.log("El mayor n\úmero es:", primerNumero);
} else if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
        console.log("El mayor n\úmero es:", segundoNumero);
} else { 
    console.log("El mayor n\úmero es:", tercerNumero);
}