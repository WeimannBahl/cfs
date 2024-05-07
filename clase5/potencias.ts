import * as readlineSync from "readline-sync";

let baseUsuario : number = readlineSync.questionInt("Ingrese el número que desea elevar a una potencia: ");
let potenciaUsuario : number = readlineSync.questionInt("Ingrese la potencia a la que va a elevar el número previo: ")
let resultado : number = potenciaFuncion(baseUsuario, potenciaUsuario);
console.log("El resultado es:", resultado);

function potenciaFuncion(base : number, potencia: number) : number {
    let resultadoFuncion : number = base;
    if (potencia == 0){
        return resultadoFuncion = 1;
    } else {
        for (let i : number = 1; i < potencia; i++) {
            resultadoFuncion *= base;
        } return resultadoFuncion;
    }
}