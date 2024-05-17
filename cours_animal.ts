/*Dans la classe Cheval
Ajoutez une propriété privée runningpos de type number initialisée à 0
Créez une méthode privée getStepHorse() qui renvoie un nombre aléatoire entier entre [1, 8[
Créez une méthode publique runHorse() qui chaque fois qu’elle est appelée incrémente runningpos du nombre renvoyé par getStepHorse
Créez une méthode publique initPos() qui réinitialise à 0 la propriété runningpos
Créez une méthode publique getPos() qui renvoie la valeur de runningpos


Créez un fichier course_animal.ts 
Créez 3 chevaux
Uranie : robe bai
Roquépine : robe noir pangare
Ourasi : robe alezan foncé
Vous devez faire courir ses 3 chevaux en appelant la méthode runHorse jusqu’à ce que tous les chevaux aient dépassé la position 450. Vous devrez alors afficher le vainqueur mais aussi le deuxième et le troisième de la course !
Attention, lorsque les chevaux courent, l’ordre est aléatoire et un cheval ne peut courir deux fois de suite.
Vous avez le droit d’ajouter une ou plusieurs propriétés ou méthodes à la classe Cheval si besoin pour votre algo
*/

import { run } from "node:test";
import { Cheval } from "./cheval";
//import { ConsoleReporter } from "jasmine";
import { randomInt } from "node:crypto";

//instanciate classes
var uranie: Cheval = new Cheval("Uranie",0,0);
var roquepine: Cheval = new Cheval("Roquépine",0,0);
var ourasi: Cheval = new Cheval("Ourasi",0,0);

//initialize robes
uranie.robe = "bai";
roquepine.robe = "noir pangare";
ourasi.robe = "alezan foncé";

//initialize performance index and flipette index
uranie.perfIndex = 30;
roquepine.perfIndex = 60;
ourasi.perfIndex = 45;

uranie.flip = 10;
roquepine.flip= 40;
ourasi.flip = 10;


//initialize array of positios
const MAX_LINE = 450;
let positions: number[] = [uranie.getPos(), roquepine.getPos(), ourasi.getPos()];

//winners arrays
let winners: string[] = [];

//initialize flag for the horse who did a previous run
let oldCheval: number = 0;

//array of objects
let horses: Cheval[] = [uranie, roquepine, ourasi];

while ( winners.length < horses.length) {
    horses.sort(() => Math.random());
    for (let i = 0; i< horses.length; i++) {
        if (!horses[i].finished && !winners.includes(horses[i].getName())) {// cheks if the horse hasn't finished with variable finished and also checks if the currents horse hasn't already won
            if (checkDifference(horses[i].getPos())) {;// call of the function that checks if there is or isnt a 100m difference 
                horses[i].runHorse(); // the horse runs
                positions[i] = horses[i].getPos(); // I get the position and store it in an array
                checkWinner(i,horses[i].getPos()); // then i go and check if the horse won
            }
            else {
                horses[i].flip = 0;
                horses[i].runHorse(); 
                checkWinner(i,horses[i].getPos());
            }
        }
        else {
            continue;
        }
    }

}

/**
 * 
 * @param actualCheval : Is the horse that's making the run
 * @param position : The position of the actual horse
 */
function checkWinner(index: number,position: number) {
    if (position >= MAX_LINE && !(horses[index].finished)) { // checks if the horse didn't pass the line
        // Not sure if i need the other condition since it's
        //also on line 34 in the "if"
        horses[index].finished = true;// the horse won so finished is true
        winners.push(horses[index].getName()) // i get the name of the horse and i put it in the array of winners
    }

}

function checkDifference(position: number): boolean {
    for (let i = 0; i < horses.length; i++) {
        if (Math.abs(horses[i].getPos() - position) <= 100 && i != position) {
            return true; // there's at least a horse with 100 or less difference with the actual
        }
    }
    return false; // there's no horse with that difference
}



console.log('First place', winners[0])
console.log('Second place', winners[1])
console.log('Third place', winners[2])

console.log(positions[0])
console.log(positions[1])
console.log(positions[2])



