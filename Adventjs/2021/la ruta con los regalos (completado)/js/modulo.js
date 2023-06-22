import canCarry from "./app.js";

const capacity = 4;
const trip = [[2, 5, 8], [3, 6, 10]];
const bool = canCarry(capacity, trip);

//respuesta
console.info(bool);