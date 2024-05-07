import * as readlineSync from "readline-sync";

let dividendoUsuario : number = readlineSync.questionInt("Ingrese un número: ");
let resultado : number = multiploFuncion(dividendoUsuario);
console.log("Su número tiene", resultado, "divisores.");

function multiploFuncion(dividendo : number) : number {
    let cantidadDivisores = 0;
    for (let i : number = 0; i < dividendo; i++) {
        if (dividendo % i == 0) {
            cantidadDivisores++;
        }
    }
    return cantidadDivisores;       
}