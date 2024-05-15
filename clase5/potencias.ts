import * as readlineSync from "readline-sync";

let baseUsuario : number = readlineSync.questionInt("Ingrese el número que desea elevar a una potencia: ");
let potenciaUsuario : number = readlineSync.questionInt("Ingrese la potencia a la que va a elevar el número previo: ")

if (baseUsuario < 0 || potenciaUsuario < 0) {
    console.log("Debe ingresar números positivos. Vuelva a ejecutar el programa.")
} else {
    let resultado : number = ejecutarPotencia(baseUsuario, potenciaUsuario);
    console.log("El resultado es:", resultado);}

function ejecutarPotencia(base : number, potencia: number) : number {
    let resultadoFuncion : number = base;
    if (base == 0 && potencia == 0) {
        return resultadoFuncion = 1;
    } else if (base == 0) {
        return resultadoFuncion = 0;
    } else if (potencia == 0) {
        return resultadoFuncion = 1;
    } else {
        for (let i : number = 1; i < potencia; i++) {
            resultadoFuncion *= base;
        } return resultadoFuncion;
    }
}