export default function countPackages(carriers, carrierID) {
  //validaciones
  if (!(carriers instanceof Array)) return console.error(`El valor ${carriers}, No es un arreglo`);

  if (carriers.length === 0) return console.error("El arreglo no puede estar vacio");

  for (let carrier of carriers) {
    if (!(carrier instanceof Array)) return console.error(`El valor ${carrier}, No es un arreglo`);

    if (carrier.length === 0) return console.error("El arreglo no puede estar vacio");
  }

  if (typeof carrierID !== "string") return console.error("El carrierID debe ser de tipo string");

  if (carrierID === "") return console.error("El string no debe estar vacio");

  //algoritmo
  const lookupIds = new Set();
  let total = 0;

  for (const [id, , deps] of carriers) {
    if (lookupIds.has(id) || id === carrierID) {
      for (const dep of deps) lookupIds.add(dep);
      const [, packages] = carriers.find(([i]) => i === id);
      total += packages;
    }
  }
  return total;
}
