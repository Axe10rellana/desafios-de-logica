import canMouseEat from "./app.js";

const direction = "up";
const game = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
];

const canEat = canMouseEat(direction, game);

//respuesta
console.info(canEat);