let arrayAzar: number[] = new Array(10);

for (let i : number = 0; i < 10; i++) {
    arrayAzar[i] = randomizarNumeros(100);
}

function randomizarNumeros(numeroAzar : number) : number {
    let random : number = Math.random() * numeroAzar;
    return random;
}

for (let i : number = 0; i < 10; i++) {
    console.log(Math.trunc(arrayAzar[i]));
}