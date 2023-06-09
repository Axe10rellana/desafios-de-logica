import selectSleigh from "./app.js";

const distance = 30;
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 },
];

const respuesta = selectSleigh(distance, sleighs);
console.info(respuesta);
