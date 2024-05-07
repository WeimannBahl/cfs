import * as readlineSync from "readline-sync";

let baseUsuario = readlineSync.questionInt("Inserte la base del triángulo: ");
let alturaUsuario = readlineSync.questionInt("Inserte la altura del triángulo: ");
let resultadoFinal = calcularAreaTriangulo(baseUsuario, alturaUsuario);
console.log("El área del triángulo es de:", resultadoFinal);

function calcularAreaTriangulo (base : number, altura : number) : number {
    let resultado : number = 0;
    return resultado = (base * altura) / 2;
}