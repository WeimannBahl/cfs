import * as readlineSync from "readline-sync";

let vuelta1Segundos : number;
let vuelta2Segundos : number;
let vuelta3Segundos : number;
let vuelta4Segundos : number;
let vuelta1Minutos : number;
let vuelta2Minutos : number;
let vuelta3Minutos : number;
let vuelta4Minutos : number;

do
{
    vuelta1Minutos = readlineSync.questionInt("Tiempo de la vuelta 1 en minutos: ");
}
while (vuelta1Minutos > 60 || vuelta1Minutos < 0);
do
{
    vuelta1Segundos = readlineSync.questionInt("Tiempo de la vuelta 1 en segundos: ");
}
while (vuelta1Segundos > 60 || vuelta1Segundos < 0);
do
{
    vuelta2Minutos = readlineSync.questionInt("Tiempo de la vuelta 2 en minutos: ");
}
while (vuelta2Minutos > 60 || vuelta2Minutos < 0);
do
{
    vuelta2Segundos = readlineSync.questionInt("Tiempo de la vuelta 2 en segundos: ");
}
while (vuelta2Segundos > 60 || vuelta2Segundos < 0);
do
{
    vuelta3Minutos = readlineSync.questionInt("Tiempo de la vuelta 3 en minutos: ");
}
while (vuelta3Minutos > 60 || vuelta3Minutos < 0);
do
{
    vuelta3Segundos = readlineSync.questionInt("Tiempo de la vuelta 3 en segundos: ");
}
while (vuelta3Segundos > 60 || vuelta3Segundos < 0);
do
{
    vuelta4Minutos = readlineSync.questionInt("Tiempo de la vuelta 4 en minutos: ");
}
while (vuelta4Minutos > 60 || vuelta4Minutos < 0);
do
{
    vuelta4Segundos = readlineSync.questionInt("Tiempo de la vuelta 4 en segundos: ");
}
while (vuelta4Segundos > 60 || vuelta4Segundos < 0);

let segundos : number = vuelta1Segundos + vuelta2Segundos + vuelta3Segundos + vuelta4Segundos;
let segundosFinal : number = segundos % 60;
let minutos : number = vuelta1Minutos + vuelta2Minutos + vuelta3Minutos + vuelta4Minutos;
let minutosExtra : number = Math.trunc(segundos / 60);
let minutosFinal : number = minutos + minutosExtra;

console.log("El tiempo total fue de:", minutosFinal, "minutos y ", segundosFinal, "segundos");