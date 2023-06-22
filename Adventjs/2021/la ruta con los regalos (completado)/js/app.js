export default function canCarry(capacity, trip) {
  //validaciones
  if (typeof capacity !== "number") return console.error(`El valor ${capacity}, No es un numero`);

  if (!Number.isInteger(capacity)) return console.error("El numero debe ser entero");

  if (Math.sign(capacity) === -1) return console.error("El numero debe ser positivo");

  if (!(trip instanceof Array)) return console.error(`El valor ${trip}, No es un arreglo`);

  if (trip.length === 0) return console.error("El arreglo no puede estar vacio");

  for (let route of trip) {
    if (!(route instanceof Array)) return console.error(`El valor ${route}, No es un arreglo`);

    if (route.length === 0) return console.error("El arreglo no puede estar vacio");

    for (let number of route) {
      if (typeof number !== "number") return console.error("El valor ${number}, No es un numero");

      if (!Number.isInteger(number)) return console.error("El numero debe ser entero");

      if (Math.sign(number) === -1) return console.error("El numero debe ser positivo");
    }
  }

  //algoritmo
  let packages = 0;

  for (let i = 0; i < trip.length; i++) {
    if (trip[i - 1] != undefined && trip[i][1] === trip[i - 1][2]) {
      packages -= trip[i - 1][0];
    }
    packages += trip[i][0];
    if (packages > capacity) {
      return false;
    }
  }
  return true;
}
