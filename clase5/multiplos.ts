import * as readlineSync from "readline-sync";

let divisorUsuario : number = readlineSync.questionInt("Ingrese un número: ");
let dividendoUsuario : number = readlineSync.questionInt("Ingrese un número que desee saber si es múltiplo del primer número: ")
let resultado : boolean = multiploFuncion(dividendoUsuario, divisorUsuario);

if (resultado == true) {
    console.log("Es múltiplo");
} else {
    console.log("No es múltiplo");
}

function multiploFuncion(dividendo : number, divisor: number) : boolean {
    if (dividendo % divisor == 0) {
        return true;
    } else {
        return false;
    }
}