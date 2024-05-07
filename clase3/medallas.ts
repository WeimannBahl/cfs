import * as readlineSync from "readline-sync";

let puesto : number;
do {puesto = readlineSync.questionInt("Ingrese el puesto del competidor: ");
} while (puesto < 1);
let puestoPosta :number = Math.trunc(puesto);

if (puestoPosta == 1){
    console.log("Se otorga la medalla de oro.");
} else if (puestoPosta == 2) {
    console.log("Se otorga la medalla de plata.");
} else if (puestoPosta == 3) {
    console.log("Se otorga la medalla de bronce.");
} else {
    console.log("Se otorga el certificado de participación.");
}
