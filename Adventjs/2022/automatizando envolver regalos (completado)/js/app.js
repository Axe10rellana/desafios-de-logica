export default function wrapping(gifts) {
  //validaciones
  if (gifts === undefined)
    return console.warn("Se esperaba una caja de regalos");

  if (!(gifts instanceof Array)) {
    return console.error(`El valor ${gifts}, No es un arreglo`);
  }

  for (let gift of gifts) {
    if (typeof gift !== "string")
      return console.error(`El valor ${gift}, No es un string`);

    if (gift === "") return console.error("El valor no puede estar vacio");
  }

  //algoritmo
  return gifts.map((str) => {
    const asteriscos = "*".repeat(str.length + 2);
    return `${asteriscos}\n*${str}*\n${asteriscos}`;
  });
}
