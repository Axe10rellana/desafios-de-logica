export default function countHours(year, holidays) {
  //validaciones
  if (year === undefined)
    return console.warn("Se esperaba recibir el año actual");

  if (typeof year !== "number")
    return console.error("El año actual debe ser un numero");

  if (!Number.isInteger(year))
    return console.error("El año actual debe ser un numero entero");

  if (year === 0) return console.error("El año no puede ser 0");

  if (Math.sign(year) === -1)
    return console.error("El año no puede ser un numero negativo");

  if (!/^\d{4}$/.test(year))
    return console.error("El año debe ser un numero de cuatro digitos");

  if (holidays === undefined)
    return console.warn("Se esperaba un arreglo de dias feriados");

  if (!(holidays instanceof Array)) {
    return console.error(`El valor ${holidays}, No es un arreglo`);
  }

  for (let dia of holidays) {
    if (typeof dia !== "string")
      return console.error(`El valor ${dia}, No es un string`);

    if (dia === "") return console.error("El valor no puede estar vacio");

    if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$/.test(dia))
      return console.error("El dia no tiene el formato correcto (MM/DD)");
  }

  //variables
  let count = 0;
  let horasExtra = 0;

  //algoritmo
  for (let dia of holidays) {
    let fecha = new Date(`${year}/${dia}`);
    let diaValido = fecha.getDay();

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      if (diaValido >= 1 && diaValido <= 5 && dia !== "12/31") {
        count++;
      }
    } else {
      if (
        diaValido >= 1 &&
        diaValido <= 5 &&
        dia !== "12/31" &&
        dia !== "02/29"
      ) {
        count++;
      }
    }
  }
  horasExtra = count * 2;

  return horasExtra;
}
