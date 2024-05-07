import * as readlineSync from "readline-sync";

let precioProducto : number = readlineSync.questionInt("Ingrese el precio del producto: ");
let descuentoProducto : number = readlineSync.questionInt("Ingrese el descuento a aplicar: ");
let tresSimple : number = descuentoProducto * precioProducto / 100;
let aplicarDescuento : number = precioProducto - tresSimple;

console.log("El precio final sera:", aplicarDescuento);