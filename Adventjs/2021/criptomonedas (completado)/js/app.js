export default function maxProfit(prices = undefined) {
  if (prices === undefined)
    return console.warn("Se esperaba una lista de precios");

  if (!(prices instanceof Array))
    return console.error("La lista de precios debe ser un Array de numeros");

  if (prices.length === 0)
    return console.error("La lista de precios esta vacia");

  for (let precio of prices) {
    if (typeof precio !== "number")
      return console.error(`El valor ${precio}, No es un numero`);

    if (!Number.isInteger(precio))
      return console.error("El array solo acepta numero enteros");

    if (precio === 0) return console.error("El resultado no puede ser 0");

    if (Math.sign(precio) === -1)
      return console.error("El resultado no puede ser negativo");
  }

  let compra = prices.splice(0, prices.length / 2);
  let venta = prices.splice(0, prices.length);
  let minimo = Math.min.apply(Math, compra);
  let maximo = Math.max.apply(Math, venta);
  let resultado = 0;

  if (minimo >= maximo) {
    resultado = -1;
  } else {
    resultado = maximo - minimo;
  }

  return resultado;
}
