export default function selectSleigh(distance, sleighs) {
  //validaciones
  if (typeof distance !== "number")
    return console.error("El valor no es de tipo numero");

  if (!Number.isInteger(distance))
    return console.error("El numero debe ser de tipo entero");

  if (Math.sign(distance) === -1)
    return console.error("El numero no debe ser negativo");

  if (!(sleighs instanceof Array))
    return console.error("El valor debe ser de tipo array");

  if (sleighs.length === 0)
    return console.error("El array no debe estar vacio");

  for (let sleight of sleighs) {
    if (typeof sleight !== "object")
      return console.error("El valor debe ser de tipo objeto");

    if (sleight === null)
      return console.error("El valor debe ser de tipo objeto");

    if (!(Object.keys(sleight).length > 0))
      return console.error("El objeto no debe estar vacio");
  }

  //variables
  let sleigh = sleighs.filter((x) => 20 / x.consumption >= distance).at(-1);

  //algoritmo
  return sleigh ? sleigh.name : null;
}
