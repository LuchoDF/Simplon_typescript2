import { Chien } from "./chien";
import { Chat } from "./chat";
import { Cheval } from "./cheval";



var perro: Chien = new Chien("scooby");
var gato1: Chat = new Chat("simba");
var gato2: Chat = new Chat("nala");
var caballo: Cheval = new Cheval("spirit");
var gizmo: Cheval = new Cheval("Gizmo");
gizmo.robe= "alezan";
console.log(`${gizmo.getName()} est de couleur ${gizmo.robe}`);

console.log(perro.getName());
console.log(gato1.getName());
console.log(gato2.getName());
console.log(caballo.getName());