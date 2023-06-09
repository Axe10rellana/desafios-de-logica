import canExit from "./app.js";

const maze1 = [
  [" ", " ", "W", " ", "S"],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", "W", " "],
  ["W", "W", " ", "W", "W"],
  [" ", " ", " ", " ", "E"],
];
const maze2 = [
  [" ", " ", "W", "W", "S"],
  [" ", " ", " ", "W", " "],
  [" ", " ", " ", "W", " "],
  ["W", "W", " ", "W", "W"],
  [" ", " ", " ", " ", "E"],
];

//resultados
console.info(canExit(maze1));
console.info(canExit(maze2));
