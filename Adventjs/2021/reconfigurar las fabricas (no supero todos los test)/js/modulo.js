import canReconfigure from "./app.js";

const from = 'BAL'
const to   = 'LIB'

const canBe = canReconfigure(from, to);

//respuesta
console.info(canBe);