import * as readlineSync from "readline-sync";

let usuario : string = readlineSync.question("Ingrese su nombre de usuario: ");
let contrasena : string = readlineSync.question("Ingrese su contraseña: ");

if (usuario != "Juan" || contrasena != "claveJuan"){
    console.log("Su nombre de usuario o contraseña no son correctos. Intente nuevamente.");
} else {
    console.log("Bienvenido de nuevo, Juan!");
}