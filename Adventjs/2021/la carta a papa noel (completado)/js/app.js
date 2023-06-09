export default function pangram(letter = undefined) {
  //validaciones
  if (letter === undefined)
    return console.warn("Se esperaba una cadena de texto");
  if (letter === "") return console.error("La cadena de texto esta vacia");
  if (typeof letter !== "string")
    return console.error(`El valor ${letter}, No es una cadena de texto`);

  //resolucion del problema
  const ALFABETO_MINUSCULAS = "abcdefghijklmnñopqrstuvwxyz";
  letter = letter.toLowerCase();
  return Array.from(ALFABETO_MINUSCULAS).every((letra) =>
    letter.includes(letra)
  );
}
