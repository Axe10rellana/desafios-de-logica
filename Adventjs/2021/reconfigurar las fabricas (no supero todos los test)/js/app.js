export default function canReconfigure(from, to) {
  //validaciones
  if (typeof from !== "string")
    return console.error("El valor debe ser de tipo string");

  if (from === "") return console.error("El string no puede estar vacio");

  if (typeof to !== "string") return console.error("El valor debe ser de tipo string");

  if (to === "") return console.error("El string no puede estar vacio");

  //algoritmo
  from = from.toUpperCase();
  to = to.toUpperCase();
  return from.length == to.length && new Set(from).size == new Set(to).size;
}