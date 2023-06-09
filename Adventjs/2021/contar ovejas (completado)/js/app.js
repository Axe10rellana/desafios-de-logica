export default function contarOvejas(ovejas) {
  //aqui tu magia
  if (!ovejas) return console.warn("La funcion debe recibir un arreglo");
  if (!(ovejas instanceof Array))
    return console.error(`${ovejas} no es un arreglo`);
  if (ovejas.length === 0)
    return console.error(`El arreglo ${ovejas} no tiene datos`);
  for (let objetos of ovejas) {
    if (Object.keys(objetos).length === 0)
      return console.error(`El objeto esta vacio`);
    if (!(objetos instanceof Object))
      return console.error(`El valor "${objetos}" ingresado, No es un objeto`);
    if (!objetos.hasOwnProperty("name"))
      return console.error(`El objeto no tiene la propiedad "name"`);
    if (!objetos.hasOwnProperty("color"))
      return console.error(`El objeto no tiene la propiedad "color"`);
    for (const valor in objetos) {
      if (valor !== "name" && valor !== "color")
        return console.error(
          `El objeto solo puede recibir un "name" y un "color"`
        );
    }
  }

  return ovejas.filter(
    (el) =>
      /[aA]/gi.test(el.name) &&
      /[Nn]/gi.test(el.name) &&
      /[rojo]/.test(el.color)
  );
}
