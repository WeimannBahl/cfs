let arregloNumeros: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
let numeroMasGrande: number = arregloNumeros[0];

for (let i : number = 0; i < 12; i++) {
    if (numeroMasGrande < arregloNumeros[i]){
        numeroMasGrande = arregloNumeros[i]
    }
}

console.log ("El número más grande es", numeroMasGrande)

isPar(numeroMasGrande);

function isPar (numero : number) {    
    if (numero % 2 == 0){
        console.log("Es un un número par.")
    } else {
        console.log("Es un un número impar.")
    }
}
