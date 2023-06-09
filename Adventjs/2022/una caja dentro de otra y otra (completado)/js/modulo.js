import fitsInOneBox from "./app.js";

const boxesTrue = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
];

const boxesFalse = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];

const boxesTrue2 = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

const respuesta = fitsInOneBox(boxesTrue);
console.info(respuesta);
