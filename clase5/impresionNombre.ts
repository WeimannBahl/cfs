import * as readlineSync from "readline-sync";

let nombreUsuario : string = readlineSync.question("Ingrese su nombre: ");
let apellidoUsuario : string = readlineSync.question("Ingrese su apellido: ");
let nombreLargo : number = nombreUsuario.length;
let apellidoLargo : number = apellidoUsuario.length;
let final : string = unirStrings(nombreUsuario, apellidoUsuario, nombreLargo, apellidoLargo);
console.log(final);


function unirStrings (nombre : string, apellido : string, largoNombre : number, largoApellido : number) : string {
    let nombreCompleto : string = "";
    for (let i : number = 0; i < largoNombre; i++) {
        nombreCompleto += nombre[i];
    }
    nombreCompleto += " ";
    for (let i : number = 0; i < largoApellido; i++) {
        nombreCompleto += apellido[i];
    }
    return nombreCompleto;
}

