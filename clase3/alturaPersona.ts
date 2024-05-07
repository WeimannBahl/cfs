import * as readlineSync from 'readline-sync';

let alturaPersona: number;
do {alturaPersona = readlineSync.questionInt("Ingrese su altura en cm: ")
} while (alturaPersona <= 0);

if (alturaPersona > 130) {
    console.log("Usted puede ingresar al juego.");
} else {
    console.log("Usted no puede ingresar al juego.");
}
