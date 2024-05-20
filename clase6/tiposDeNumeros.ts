import * as rls from "readline-sync";

let n: number = rls.questionInt("Ingrese la cantidad de n\úmeros que desea introducir: ");
let arregloUsuario: number[] = new Array(n);

let negativos: number = 0;
let positivos: number = 0;
let ceros: number = 0;

for (let i: number = 0; i < n; i++) {
    arregloUsuario[i] = rls.questionInt("Introduzca un número: ");
}

for (let i: number = 0; i < n; i++) {
    if (arregloUsuario[i] == 0) {
        ceros++;
    } else if (arregloUsuario[i] > 0) {
        positivos++
    } else {
        negativos++
    }
}

console.log(`Hay ${positivos} números positivos, ${negativos} números negativos y ${ceros} ceros.`)