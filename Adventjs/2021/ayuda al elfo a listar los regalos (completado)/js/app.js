export default function listGifts(letter) {
 //validaciones
  if (typeof letter !== "string")
    return console.error("El valor debe ser de tipo string");

  if (letter === "") return console.error("El string no debe estar vacio");

  //algoritmo
  letter = letter.toLowerCase();
  const obj = {};
  letter.split(' ').filter(item => !item.includes('_') && item !== "").forEach((item) => obj[item] = (obj[item] || 0) + 1);

  return obj;
}
