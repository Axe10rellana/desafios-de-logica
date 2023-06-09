export default function getOptimalPath(path) {
  //validaciones
  if (!(path instanceof Array))
    return console.error("El valor debe ser de tipo array");

  if (path.length === 0) return console.error("El array no debe estar vacio");

  for (let position of path) {
    if (!(position instanceof Array))
      return console.error("El valor debe ser de tipo array");

    if (position.length === 0)
      return console.error("El array no debe estar vacio");

    for (let valuePosition of position) {
      if (typeof valuePosition !== "number")
        return console.error("El valor no es de tipo numero");

      if (!Number.isInteger(valuePosition))
        return console.error("El numero debe ser de tipo entero");
    }
  }

  //algoritmo
  const res = path.reduceRight((previous, current) => {
    return current.map((val, index) => {
      return val + Math.min(previous[index], previous[index + 1]);
    });
  });
  return res[0];
}
