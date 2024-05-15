import * as rls from "readline-sync";

let longitudArray : number = rls.questionInt("Indique la cantidad de nombres que va a introducir: ")
let nombresDeseados : string[] = new Array(longitudArray);

for (let i : number = 0; i < longitudArray; i++) {
    nombresDeseados[i] = rls.question("Introduzca un nombre: ");
}

for (let i : number = 0; i < longitudArray; i++) {
    console.log("El nombre en la posición", i, "es", nombresDeseados[i]);
}