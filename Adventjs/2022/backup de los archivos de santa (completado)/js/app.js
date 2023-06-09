export default function getFilesToBackup(lastBackup, changes) {
  //validaciones
  if (typeof lastBackup !== "number")
    return console.error("El valor no es de tipo numero");

  if (!Number.isInteger(lastBackup))
    return console.error("El numero debe ser de tipo entero");

  if (Math.sign(lastBackup) === -1)
    return console.error("El numero no debe ser negativo");

  if (!(changes instanceof Array))
    return console.error("El valor debe ser de tipo array");

  for (let change of changes) {
    if (!(change instanceof Array))
      return console.error("El valor debe ser de tipo array");

    if (change.length !== 2)
      return console.error("El array debe ser de 2 posiciones");

    for (let modificate of change) {
      if (typeof modificate !== "number")
        return console.error("El valor no es de tipo numero");

      if (!Number.isInteger(modificate))
        return console.error("El numero debe ser de tipo entero");

      if (Math.sign(modificate) === -1)
        return console.error("El numero no debe ser negativo");
    }
  }

  //variables
  let filtered = changes.filter((x) => x[1] > lastBackup);
  let ids = filtered.map((x) => x[0]);
  let sorted = ids.sort((a, b) => a - b);
  let flated = [...new Set(sorted)];

  return flated;
}
