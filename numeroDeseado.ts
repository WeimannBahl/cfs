import * as rls from "readline-sync";

let numeroDeseado : number[] = new Array(5);

for (let i : number = 0; i < 5; i++) {
    numeroDeseado[i] = rls.questionInt("Introduzca un numero: ");
}

for (let i : number = 0; i < 5; i++) {
    console.log("El número en la posición", i, "es", numeroDeseado[i]);
}