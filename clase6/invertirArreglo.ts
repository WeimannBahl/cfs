import * as rls from "readline-sync";

let n: number = rls.questionInt("Ingrese la cantidad de n\úmeros que desea introducir: ");
let arregloUsuario: number[] = new Array(n);

for (let i: number = 0; i < n; i++) {
    arregloUsuario[i] = rls.questionInt("Introduzca un número: ");
}

let contadorInverso = n - 1;
for (let i: number = 0; i < n; i++) {
    console.log(arregloUsuario[contadorInverso]);
    contadorInverso--;
}