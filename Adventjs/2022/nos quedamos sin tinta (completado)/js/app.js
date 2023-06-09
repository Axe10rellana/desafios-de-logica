export default function dryNumbers(dry, numbers) {
  //validaciones
  if (typeof dry !== "number") return "El valor debe ser un numero";

  if (!Number.isInteger(dry)) return "El numero debe ser entero";

  if (Math.sign(dry) === -1) return "El numero no debe ser negativo";

  if (!(dry >= 0 && dry <= 9)) return "El numero debe estar entre 0 y 9";

  if (typeof numbers !== "number") return "El valor debe ser un numero";

  if (!Number.isInteger(numbers)) return "El numero debe ser entero";

  if (Math.sign(numbers) === -1) return "El numero no debe ser negativo";

  //algoritmo
  return Array.from(Array(numbers).keys())
    .filter((x) => `${x + 1}`.split("").includes(`${dry}`))
    .map((x) => x + 1);
}
