import groupBy from "./app.js";

const collection = [6.1, 4.2, 6.3];
const it = Math.floor;
const object = groupBy(collection, it);

//respuesta
console.info(object);