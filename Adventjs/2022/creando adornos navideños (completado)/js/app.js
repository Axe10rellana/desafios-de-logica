export default function createCube(size) {
  //validaciones
  if (typeof size !== "number")
    return console.error("El valor no es de tipo numero");
  if (!Number.isInteger(size))
    return console.error("El valor debe ser un numero entero");
  if (Math.sign(size) === -1)
    return console.error("El valor no debe ser negativo");
  if (size === 0) return console.error("El valor debe ser mayor o igual a 1");

  //variables
  let head = [];
  let tail = [];

  //algoritmo
  for (let i = 1; i <= size; i++) {
    head.push(" ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size));
    tail.push(
      " ".repeat(i - 1) + "\\/".repeat(size - (i - 1)) + "_/".repeat(size)
    );
  }
  return [...head, ...tail].join("\n");
}
