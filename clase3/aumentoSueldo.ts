import * as readlineSync from "readline-sync";

let sueldoUsuario : number;
do { sueldoUsuario = readlineSync.questionInt("Introduzca el valor del sueldo en números: ");
} while (sueldoUsuario < 0);

if (sueldoUsuario > 25000) {
    console.log("Este sueldo se mantendrá en $", sueldoUsuario)
} else if (sueldoUsuario > 20000 && sueldoUsuario < 25001) {
    console.log("Su nuevo sueldo será de $", sueldoUsuario + (5 * sueldoUsuario / 100))
} else if (sueldoUsuario > 15000 && sueldoUsuario < 20001) {
    console.log("Su nuevo sueldo será de $", sueldoUsuario + (10 * sueldoUsuario / 100))
} else {
    console.log("Su nuevo sueldo será de $", sueldoUsuario + (20 * sueldoUsuario / 100))
}