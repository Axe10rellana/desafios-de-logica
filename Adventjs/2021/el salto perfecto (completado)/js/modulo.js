import checkSledJump from "./app.js";

const heights = [1, 2, 3, 2, 1];
const isOptimal = checkSledJump(heights);

//respuesta
console.info(isOptimal);