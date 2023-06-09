export default function missingReindeer(ids = undefined) {
  if (ids === undefined)
    return console.warn("Se esperaba una lista de numeros enteros");
  if (!(ids instanceof Array))
    return console.error(`El valor ${ids}, No es una lista de numeros enteros`);
  if (ids.length === 0) return console.error("La lista de numeros esta vacia");
  for (let [i, numero] of ids.entries()) {
    if (typeof numero !== "number")
      return console.error(`El valor ${numero}, No es un numero`);
    if (!Number.isInteger(numero))
      return console.error(`El numero ${numero}, No es de tipo entero`);
    if (!(numero >= 0 && numero <= 100))
      return console.error(
        `El numero ${numero}, Debe ser un numero del 0 al 100`
      );
    if (ids.indexOf(numero) !== i)
      return console.error(`El numero ${numero}, se esta repitiendo`);
  }

  //ordenamos el arreglo
  ids.sort((a, b) => a - b);
  let longitud = ids.length;
  let renoPerdido = 0;

  for (let i = 0; i < longitud; i++) {
    if (longitud < 3) {
      renoPerdido = longitud;
    }
    if (ids.indexOf(i) === -1) {
      renoPerdido = i;
    }
  }

  return renoPerdido;
}
