import * as rls from "readline-sync";

let tamañoArray : number = rls.questionInt("Indique la cantidad de números que va a ingresar: ");
let numerosSuma : number[] = new Array(tamañoArray);
let total : number = 0;

for (let i : number = 0; i < tamañoArray; i++) {
    numerosSuma[i] = rls.questionInt("Introduzca un número: ");
    total += numerosSuma[i];    
}

console.log("La suma de todos los números ingresados es:", total);