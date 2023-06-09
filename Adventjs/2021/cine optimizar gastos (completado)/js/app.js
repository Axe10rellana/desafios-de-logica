export default function shouldBuyFidelity(times = undefined) {
  //validaciones
  if (times === undefined)
    return console.warn(
      "Se esperaba recibir la cantidad de veces que el usuario va a ir al cine"
    );

  if (typeof times !== "number")
    return console.error("La cantidad de veces debe ser un numero");

  if (!Number.isInteger(times))
    return console.error("La cantidad de veces solo acepta numero enteros");

  if (times === 0) return console.error("La cantidad de veces no puede ser 0");

  if (Math.sign(times) === -1)
    return console.error(
      "La cantidad de veces no puede ser un numero negativo"
    );

  //variables
  let entradaNormal = 12 * times;
  let tarjetaFidelidad = 0;
  let valorRecursivo = 0;
  let r = 1;
  let comprobacion = false;

  //algoritmo
  for (let m = 1; m <= times; m++) {
    r *= 0.75;
    valorRecursivo += 12 * r;
  }

  tarjetaFidelidad = 250 + valorRecursivo;

  if (entradaNormal < tarjetaFidelidad) {
    comprobacion = false;
  } else {
    comprobacion = true;
  }

  return comprobacion;
}
