export default function getGiftsToRefill(a1, a2, a3) {
  //validaciones
  if (a1 === undefined) return console.warn("Se esperaba una caja");

  if (a1 === null) return console.warn("Se esperaba una caja");

  if (!(a1 instanceof Array)) {
    return console.error(`El valor ${a1}, No es un arreglo`);
  }

  for (let gift1 of a1) {
    //validaciones
    if (typeof gift1 !== "string")
      return console.error(`El valor ${gift1}, No es un objeto`);

    if (gift1 === null)
      return console.error(`El valor ${gift1}, No puede ser null`);
  }

  if (a2 === undefined) return console.warn("Se esperaba una caja");

  if (a2 === null) return console.warn("Se esperaba una caja");

  if (!(a2 instanceof Array)) {
    return console.error(`El valor ${a2}, No es un arreglo`);
  }

  for (let gift2 of a2) {
    //validaciones
    if (typeof gift2 !== "string")
      return console.error(`El valor ${gift2}, No es un objeto`);

    if (gift2 === null)
      return console.error(`El valor ${gift2}, No puede ser null`);
  }

  if (a3 === undefined) return console.warn("Se esperaba una caja");

  if (a3 === null) return console.warn("Se esperaba una caja");

  if (!(a3 instanceof Array)) {
    return console.error(`El valor ${a3}, No es un arreglo`);
  }

  for (let gift3 of a3) {
    //validaciones
    if (typeof gift3 !== "string")
      return console.error(`El valor ${gift3}, No es un objeto`);

    if (gift3 === null)
      return console.error(`El valor ${gift3}, No puede ser null`);
  }

  //variables
  let gifts = [];
  let set1 = new Set(a1);
  let set2 = new Set(a2);
  let set3 = new Set(a3);
  let almacen1 = Array.from(set1);
  let almacen2 = Array.from(set2);
  let almacen3 = Array.from(set3);

  //algoritmo
  for (let gift of almacen1) {
    if (
      almacen1.length !== 0 &&
      !almacen2.includes(gift) &&
      !almacen3.includes(gift)
    ) {
      gifts.push(gift);
    } else {
      gifts;
    }
  }

  for (let gift of almacen2) {
    if (
      almacen2.length !== 0 &&
      !almacen1.includes(gift) &&
      !almacen3.includes(gift)
    ) {
      gifts.push(gift);
    } else {
      gifts;
    }
  }

  for (let gift of almacen3) {
    if (
      almacen3.length !== 0 &&
      !almacen1.includes(gift) &&
      !almacen2.includes(gift)
    ) {
      gifts.push(gift);
    } else {
      gifts;
    }
  }

  if (gifts.length === 0) {
    return [];
  } else if (gifts.length === 1) {
    return gifts[0];
  } else {
    return gifts;
  }
}
