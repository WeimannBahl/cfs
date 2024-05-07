import * as readlineSync from "readline-sync";

let suma, nota, promedio, contador : number;

contador = 1;
suma = 0;

while(contador < 10) {
    nota = readlineSync.questionInt("Ingrese una nota: ");
    suma = suma + nota;
    contador++;
}

promedio = suma / 10;

console.log("El promedio es de:", promedio);