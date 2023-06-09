export default function sortToys(toys, positions) {
  //validaciones
  if (!(toys instanceof Array)) return "El valor no es un array";

  if (toys.length === 0) return "El array no debe estar vacio";

  for (let toy of toys) {
    if (typeof toy !== "string") return "El valor no es un string";

    if (toy === "") return "El string no debe estar vacio";
  }

  if (!(positions instanceof Array)) return "El valor no es un array";

  if (positions.length === 0) return "El array no debe estar vacio";

  for (let position of positions) {
    if (typeof position !== "number") return "El valor no es un numero";

    if (!Number.isInteger(position)) return "El numero debe ser entero";

    if (Math.sign(position) === -1) return "El numero no debe ser negativo";
  }

  //algoritmo
  return toys.sort(
    (a, b) => positions[toys.indexOf(a)] - positions[toys.indexOf(b)]
  );
}
