export default function fitsInOneBox(boxes) {
  //validaciones
  if (boxes === undefined) return console.warn("Se esperaba una caja");

  if (boxes === null) return console.warn("Se esperaba una caja");

  if (!(boxes instanceof Array)) {
    return console.error(`El valor ${boxes}, No es un arreglo`);
  }

  if (boxes.length === 0) return console.error("El array no puede estar vacio");

  for (let box of boxes) {
    //variables
    let keys = Object.keys(box);

    //validaciones
    if (typeof box !== "object")
      return console.error(`El valor ${box}, No es un objeto`);

    if (box === null)
      return console.error(`El valor ${box}, No puede ser null`);

    if (box instanceof Array)
      return console.error(`El valor ${box}, No es un objeto`);

    if (Object.keys(box).length === 0)
      return console.error("El objeto no puede estar vacio");

    if (
      keys.length !== 3 ||
      keys[0] !== "l" ||
      keys[1] !== "w" ||
      keys[2] !== "h"
    )
      return console.error(
        `El valor ${box} debe ser un ({ l: value, w: value, h: value })`
      );

    for (let number in box) {
      if (typeof box[number] !== "number") {
        return console.error(`El valor ${box[number]} debe ser de tipo numero`);
      }

      if (!Number.isInteger(box[number]))
        return console.error(
          `El valor ${box[number]} debe ser un numero entero`
        );

      if (Math.sign(box[number]) === -1)
        return console.error(
          `El valor ${box[number]} no puede ser un numero negativo`
        );
    }
  }

  //algoritmo
  let sortBoxes = boxes.sort((a, b) => {
    if (a.l > b.l && a.w > b.w && a.h > b.h) {
      return 1;
    }
    if (a.l < b.l && a.w < b.w && a.h < b.h) {
      return -1;
    }
    return 0;
  });

  return sortBoxes.every((box, index) => {
    if (index === 0) return true;
    const prev = boxes[index - 1];
    return box.l > prev.l && box.w > prev.w && box.h > prev.h;
  });
}
