import isValid from "./app.js";

const carta = 'bici coche (balón) bici coche peluche';
const regalos = isValid(carta);

//respuesta
console.info(regalos);