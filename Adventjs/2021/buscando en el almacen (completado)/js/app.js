export default function contains(store, product) {
  //validaciones
  if (typeof store !== "object")
    return console.error("El valor debe ser de tipo objeto");

  if (store === null)
    return console.error("El valor debe ser de tipo objeto");

  if (!(Object.keys(store).length > 0))
    return false;

  if (typeof product !== "string") return console.error("El producto debe ser de tipo string");

  if (product === "") return console.error("El string no debe estar vacio");

  //algoritmo
  return Object.values(store).some(value => {
    if (typeof value === 'object') {
      return contains(value, product);
    }
    return value === product
  }
  );
}
