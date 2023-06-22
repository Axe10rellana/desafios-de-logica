import fixFiles from "./app.js";

const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
const array = fixFiles(files);

//respuesta
console.info(array);