export default function distributeGifts(packOfGifts, reindeers) {
  //validaciones
  if (packOfGifts === undefined)
    return console.warn("Se esperaba una caja de regalos");

  if (!(packOfGifts instanceof Array)) {
    return console.error(`El valor ${packOfGifts}, No es un arreglo`);
  }

  for (let gift of packOfGifts) {
    if (typeof gift !== "string")
      return console.error(`El valor ${gift}, No es un string`);

    if (gift === "") return console.error("El valor no puede estar vacio");
  }

  if (reindeers === undefined)
    return console.warn("Se esperaba una lista de renos");

  if (!(reindeers instanceof Array)) {
    return console.error(`El valor ${reindeers}, No es un arreglo`);
  }

  for (let reinder of reindeers) {
    if (typeof reinder !== "string")
      return console.error(`El valor ${reinder}, No es un string`);

    if (reinder === "") return console.error("El valor no puede estar vacio");
  }

  //variables
  let pesoDelPackDeRegalos = 0;
  let limiteDePesoMaximo = 0;

  //algoritmo
  for (let gift of packOfGifts) {
    let contador = 0;
    for (let letter of gift) {
      if (/[a-zA-Z]/.test(letter)) {
        contador++;
      }
    }
    pesoDelPackDeRegalos += contador;
  }

  for (let reinder of reindeers) {
    let contador = 0;
    for (let letter of reinder) {
      if (/[a-zA-Z]/.test(letter)) {
        contador++;
      }
    }
    limiteDePesoMaximo += contador * 2;
  }

  return Math.trunc(limiteDePesoMaximo / pesoDelPackDeRegalos);
}
