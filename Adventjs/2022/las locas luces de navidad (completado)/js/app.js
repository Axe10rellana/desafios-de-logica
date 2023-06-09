export default function countTime(leds) {
  //validaciones
  if (!(leds instanceof Array))
    return console.error("El valor debe ser un array de numeros");

  if (leds.length === 0)
    return console.error("El array de numeros no puede estar vacio");

  for (let led of leds) {
    if (typeof led !== "number")
      return console.error(`El valor ${led}, debe ser un numero`);

    if (!Number.isInteger(led))
      return console.error(`El valor ${led}, debe ser un numero entero`);

    if (Math.sign(led) === -1)
      return console.error(`El valor ${led}, no debe ser negativo`);

    if (led !== 0 && led !== 1)
      return console.error(`El valor ${led} debe ser 0 o 1`);
  }

  //variables
  let arr = leds.join("").split("1");

  //algoritmo
  arr[0] += arr.pop();
  return Math.max(...arr.map((led) => led.length)) * 7;
}
