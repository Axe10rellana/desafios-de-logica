import howManyReindeers from "./app.js";

const reindeerTypes = [
  { type: "Nuclear", weightCapacity: 50 },
  { type: "Electric", weightCapacity: 10 },
  { type: "Gasoline", weightCapacity: 5 },
  { type: "Diesel", weightCapacity: 1 },
];
const gifts = [
  { country: "Spain", weight: 30 },
  { country: "Spain", weight: 7 },
  { country: "France", weight: 17 },
];
const respuesta = howManyReindeers(reindeerTypes, gifts);
console.info(respuesta);
