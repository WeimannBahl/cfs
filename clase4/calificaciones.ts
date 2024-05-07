import * as readlineSync from "readline-sync";
let nombreAlumno : string;
let notaPractica : number;
let notaProblemas : number;
let notaTeorica : number;
let notaTotal : number;

do {
    nombreAlumno = readlineSync.question("Ingrese el nombre del alumno: ");
    if (nombreAlumno == "") {
        break;
    }
    do {
        notaPractica = readlineSync.questionInt("Ingrese la nota práctica (0 al 10) del alumno: ");    
    } while (notaPractica < 0 || notaPractica> 10);
    do {
        notaProblemas = readlineSync.questionInt("Ingrese la nota de resolución de problemas (0 al 10) del alumno: ");
    } while (notaProblemas < 0 || notaProblemas > 10);
    do {
        notaTeorica = readlineSync.questionInt("Ingrese la nota de conocimiento teórico (0 al 10) del alumno: ");
    } while (notaTeorica < 0 || notaTeorica > 10);
    
    notaTotal = (notaPractica + notaProblemas + notaTeorica) / 3;

    console.log("El alumno", nombreAlumno, "tiene una nota total de", notaTotal);

} while (nombreAlumno != "");
