export default function checkSledJump(heights) {
  //validaciones
  if (!(heights instanceof Array)) return console.error(`El valor ${heights}, No es un arreglo`);

  if (heights.length === 0) return false;

  if (heights.length < 3) return false;

  for (let height of heights) {
    if (typeof height !== "number") return console.error("El valor debe ser de tipo numero");

    if (!Number.isInteger(height)) return console.error("El numero debe ser entero");

    if (Math.sign(height) === -1) return console.error("El numero debe ser positivo");
  }

  //algoritmo
  for (let i = 1, j = heights.length - 1; i < heights.length / 2; i++, j--) {
    if (heights[i - 1] >= heights[i] || heights[j - 1] <= heights[j]) {
      return false
    }
  }
  return true
}
