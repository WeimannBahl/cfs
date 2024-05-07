import * as readlineSync from "readline-sync";

let precioProducto : number;
do {precioProducto = readlineSync.questionInt("Precio del producto: ")
} while (precioProducto < 0);
let cantidadProducto : number;
do {cantidadProducto = readlineSync.questionInt("Cantidad del producto: ")
} while (cantidadProducto <= 0);

let aPagar : number = Math.trunc(cantidadProducto) * precioProducto;

if (aPagar > 1000) {
    console.log("Usted debe pagar:", aPagar - (10 * aPagar / 100));
} else {
    console.log("Usted debe pagar:", aPagar);
}