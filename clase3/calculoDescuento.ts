import * as readlineSync from 'readline-sync';
const precioProducto = readlineSync.questionInt("Ingrese el precio del producto en numeros enteros: ");
const descuentoProducto = readlineSync.questionInt("Ingrese el descuento en numeros enteros: ");
const reglaTresSimple = (precioProducto * descuentoProducto) / 100;
const precioFinal = precioProducto - reglaTresSimple;
console.log("El producto va a costar: ", precioFinal);