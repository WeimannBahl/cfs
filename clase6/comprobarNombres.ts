import * as rls from "readline-sync";

let bigotes: string[] = ["Enzo", "Juampi", "Falchon", "Bahl", "Dani"];
let usuarioPregunta: string = rls.question("Introduzca el nombre que quiere ver si está en el arreglo: ");
let bigotesLargo: number = bigotes.length;

for (let i: number = 0; i < bigotesLargo; i++) {
    console.log(bigotes[i]);
}

let comprobarPresente: boolean = isPresent(bigotes, usuarioPregunta, bigotesLargo);
if (comprobarPresente == true) {
    console.log("El nombre se encuentra en el arreglo.");
} else {
    console.log("El nombre no se encuentra en el arreglo.");
}

function isPresent (stringArray: string[], stringUsuario: string, largo: number): boolean {
    let presente: boolean = false;
    for (let i: number = 0; i < largo; i++) {
        if (stringUsuario == stringArray[i]) {
            presente = true;
            return presente;
        }
    }
    return false;    
}