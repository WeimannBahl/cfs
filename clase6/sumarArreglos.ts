import * as rls from "readline-sync";

let primerArregloUsuario: number[] = new Array(6);
let segundoArregloUsuario: number[] = new Array(6);
let arregloFinal: number[] = new Array(6);

for (let i: number = 0; i < 6; i++) {
    primerArregloUsuario[i] = rls.questionInt("Introduzca un número para la primera cadena: ")
}
for (let i: number = 0; i < 6; i++) {
    segundoArregloUsuario[i] = rls.questionInt("Introduzca un número para la segunda cadena: ")
}

for (let i: number = 0; i < 6; i++) {
    arregloFinal[i] = primerArregloUsuario[i] + segundoArregloUsuario[i];
    console.log(arregloFinal[i]);
}