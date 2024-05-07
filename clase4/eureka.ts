import * as readlineSync from "readline-sync";

let clave : string = "eureka";

let introducirClave : string;
let contador : number = 0;
/*
for (let contador : number = 0; contador < 3; contador++) {
    introducirClave = readlineSync.question("Introduzca la contraseña:");
    if (clave == introducirClave) {
        console.log("La contraseña es correcta.");
        throw "exit";
    } else {
        console.log("La contraseña es incorrecta. Vuelva a intentarlo.")
    }
}    
console.log("Se han agotado todos sus intentos.");
*/

while (contador < 3) {
    introducirClave = readlineSync.question("Introduzca la contraseña:");
    if (clave == introducirClave) {
        console.log("Bienvenido!");
        break;
    } else {
        contador++;
        if (contador == 3) {
            console.log("Se han agotado sus intentos.");
        }
    }    
}
