export default function checkPart(part) {
  //validaciones
  if (part === "") return console.warn("El valor no puede ir vacio");

  if (typeof part !== "string")
    return console.error("El valor no es un string");

  if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(part))
    return console.error("El valor solo acepta letras");

  //variables
  part = part.toLowerCase();

  //algoritmo
  return [...part].some((_, i, arr) => {
    let w = arr.filter((_, y) => y != i);
    let isPalidrome = w.join("") == w.reverse().join("");
    return isPalidrome;
  });
}
