import distributeGifts from "./app.js";

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];
const respuesta = distributeGifts(packOfGifts, reindeers);
console.info(respuesta);
