export default function isValid(letter) {
 //validaciones
  if (typeof letter !== "string")
    return console.error("El valor debe ser de tipo string");

  if (letter === "") return console.error("El string no debe estar vacio");

  //algoritmo
  letter = letter.toLowerCase();
  const open = [...letter].filter((letra) => letra === "(").length
  const close = [...letter].filter((letra) => letra === ")").length
  const vacio = letter.replace('()',"").trim();
  const llave = [...letter].filter((letra) => letra === "{").length
  const corchete = [...letter].filter((letra) => letra === "[").length

  if(
    (letter.length > vacio.length)
    || letter[0] === ")"
    || (open !== close)
    || (llave || corchete)){
    return false;
  }
  return true;
}
