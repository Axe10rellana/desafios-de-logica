import getMaxGifts from "./app.js";

const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;
const respuesta = getMaxGifts(giftsCities, maxGifts, maxCities);
console.info(respuesta);
