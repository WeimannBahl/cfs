import * as readlineSync from "readline-sync";

let precioProducto : number = readlineSync.questionInt("Introduzca el precio del producto: ");
let cantidadProducto: number = readlineSync.questionInt("Introduzca la cantidad de productos del mismo tipo: ");
let precioMultiplicado : number = precioProducto * cantidadProducto;
let mesActual : string;
do { mesActual = readlineSync.question("Introduzca el mes actual en minúsculas: ")
} while (mesActual != "enero" && mesActual != "febrero" && mesActual != "marzo" && mesActual != "abril" && mesActual != "mayo" && mesActual != "junio" && mesActual != "julio" && mesActual != "agosto" && mesActual != "septiembre" && mesActual != "octubre" && mesActual != "noviembre" && mesActual != "diciembre");

if (mesActual != "octubre") {
    console.log("Usted debe pagar: $", precioMultiplicado);
} else {
    console.log("Usted debe pagar: $", precioMultiplicado - (15 * precioMultiplicado / 100))
}