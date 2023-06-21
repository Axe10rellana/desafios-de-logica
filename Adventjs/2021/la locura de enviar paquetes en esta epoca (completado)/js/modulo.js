import countPackages from "./app.js";

const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
];

const carrierID = 'dapelu';
const numberOfPackages = countPackages(carriers, carrierID);

//respuesta
console.info(numberOfPackages);