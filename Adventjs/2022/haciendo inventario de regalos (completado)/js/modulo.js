import getGiftsToRefill from "./app.js";

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

const respuesta = getGiftsToRefill(a1, a2, a3);
console.info(respuesta);
