import * as readlineSync from "readline-sync";

let buenoMalo : string;
do 
{ 
    buenoMalo = readlineSync.question("Sos bueno o malo? (responder con \"b\" o \"m\"): ");
}
while (buenoMalo != "b" && buenoMalo != "B" && buenoMalo != "m" && buenoMalo != "M");

if (buenoMalo == "b" || buenoMalo == "B") {
    console.log("Podés jugar en la selección.");
} else {
    console.log("No podés jugar en la selección.");
}