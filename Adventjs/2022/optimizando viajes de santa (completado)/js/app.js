export default function getMaxGifts(giftsCities, maxGifts, maxCities) {
  //validaciones
  if (typeof maxGifts !== "number")
    return console.error("El valor debe ser un numero");

  if (!Number.isInteger(maxGifts))
    return console.error("El valor debe ser un numero entero");

  if (Math.sign(maxGifts) === -1)
    return console.error("El valor no debe ser negativo");

  if (maxGifts === 0)
    return console.error("El valor debe ser mayor o igual a 1");

  if (typeof maxCities !== "number")
    return console.error("El valor debe ser un numero");

  if (!Number.isInteger(maxCities))
    return console.error("El valor debe ser un numero entero");

  if (Math.sign(maxCities) === -1)
    return console.error("El valor no debe ser negativo");

  if (maxCities === 0)
    return console.error("El valor debe ser mayor o igual a 1");

  if (!(giftsCities instanceof Array))
    return console.error("El valor debe ser un array de numeros");

  if (giftsCities.length === 0)
    return console.error("El array de numeros no puede estar vacio");

  for (let giftCitie of giftsCities) {
    if (typeof giftCitie !== "number")
      return console.error(`El valor ${giftCitie}, debe ser un numero`);

    if (!Number.isInteger(giftCitie))
      return console.error(`El valor ${giftCitie}, debe ser un numero entero`);

    if (Math.sign(giftCitie) === -1)
      return console.error(`El valor ${giftCitie}, no debe ser negativo`);

    if (giftCitie === 0)
      return console.error(`El valor ${giftCitie}, debe ser mayor o igual a 1`);
  }

  //variables
  let combinaciones = [];

  //algoritmo
  combinaciones.push([], [giftsCities[0]]);
  giftsCities.shift();

  giftsCities.map((x) => {
    const newList = combinaciones.map((combinacion) => {
      let _combinacion = [...combinacion];
      if (_combinacion.length < maxCities) {
        _combinacion.push(x);
      }
      return _combinacion;
    });
    combinaciones = combinaciones.concat(newList);
  });

  combinaciones.shift();

  return Math.max(
    ...combinaciones.map((x) => {
      let sum = x.reduce((total, num) => total + num);
      return sum > maxGifts ? 0 : sum;
    })
  );
}
