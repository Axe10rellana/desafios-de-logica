export default function checkStepNumbers(systemNames, stepNumbers) {
  //validaciones
  if (!(systemNames instanceof Array)) return "El valor debe ser un array";

  if (systemNames.length === 0) return "El array no debe estar vacio";

  for (let systemName of systemNames) {
    if (typeof systemName !== "string") return "El valor debe ser un string";

    if (systemName === "") return "El valor no debe estar vacio";
  }

  if (!(stepNumbers instanceof Array)) return "El valor debe ser un array";

  if (stepNumbers.length === 0) return "El array no debe estar vacio";

  for (let stepNumber of stepNumbers) {
    if (typeof stepNumber !== "number") return "El valor debe ser un numero";

    if (!Number.isInteger(stepNumber)) return "El numero debe ser entero";

    if (Math.sign(stepNumber) === -1) return "El numero no debe ser negativo";
  }

  //algoritmo
  return systemNames.every(
    (e, i) =>
      stepNumbers[i] <
      stepNumbers[i + systemNames.slice(i + 1).indexOf(e) + 1] +
        !(systemNames.lastIndexOf(e) - i)
  );
}
