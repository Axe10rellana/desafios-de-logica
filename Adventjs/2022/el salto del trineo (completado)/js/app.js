export default function checkJump(heights) {
  //validaciones
  if (!(heights instanceof Array))
    return console.error("El valor debe ser un array de numeros");

  if (heights.length === 0)
    return console.error("El array de numeros no puede estar vacio");

  for (let height of heights) {
    if (typeof height !== "number")
      return console.error(`El valor ${height}, debe ser un numero`);

    if (!Number.isInteger(height))
      return console.error(`El valor ${height}, debe ser un numero entero`);

    if (Math.sign(height) === -1)
      return console.error(`El valor ${height}, no debe ser negativo`);
  }

  //variables
  const left = heights.splice(0, heights.indexOf(Math.max(...heights)));
  const conditionLeft = left.slice(1).every((l, i) => l >= left[i]);
  const conditionRight = heights.slice(1).every((h, i) => h <= heights[i]);

  //algoritmo
  return conditionLeft && conditionRight && !!left.length && heights.length > 1;
}
