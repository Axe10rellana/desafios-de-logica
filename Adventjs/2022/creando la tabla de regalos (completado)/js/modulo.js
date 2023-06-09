import printTable from "./app.js";

const gifts1 = [
  { name: "Game", quantity: 2 },
  { name: "Bike", quantity: 1 },
  { name: "Book", quantity: 3 },
];
const gifts2 = [
  { name: "PlayStation 5", quantity: 9234782374892 },
  { name: "Book Learn Web Dev", quantity: 23531 },
];

console.info(printTable(gifts1));
console.info(printTable(gifts2));
