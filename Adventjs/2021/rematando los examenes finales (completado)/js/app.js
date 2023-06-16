export default function sumPairs(numbers, result) {
 //validaciones
  if (!(numbers instanceof Array)) return console.error(`El valor ${numbers}, No es un arreglo`);

  if (numbers.length === 0) return "El arreglo no debe estar vacio";

  for (let number of numbers) {
    if (typeof number !== "number")
      return console.error(`El valor ${number}, No es un numero`);

    if (!Number.isInteger(number)) return console.error(`El valor ${number}, debe ser entero`);
  }

  if (typeof result !== "number") return console.error("El resultado debe ser de tipo numero");

  if (!Number.isInteger(result)) return console.error("El numero debe ser entero");

  if (Math.sign(result) === -1) return console.error("El numero debe ser positivo");

  if (result === 0) return console.error("El numero debe ser mayor o igual a 1");

  //algoritmo
  return numbers.reduce((acc, currNumber, currIndex) => {
    if (acc) return acc;
    const found = numbers.find(
      (otherNumber, otherIndex) =>
        currNumber + otherNumber === result && currIndex !== otherIndex
    );
    return found ? [currNumber, found] : null;
  }, null);
}
