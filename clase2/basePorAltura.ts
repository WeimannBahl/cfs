import * as readlineSync from "readline-sync";

let baseDelRectangulo : number = readlineSync.questionInt("Ingrese la base del rectangulo: ");
let alturaDelRectangulo : number = readlineSync.questionInt("Ingrese la altura del rectangulo: ");
let areaDelRectangulo : number = baseDelRectangulo * alturaDelRectangulo;

console.log("El area del rectangulo es", areaDelRectangulo);