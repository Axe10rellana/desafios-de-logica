export default function wrapGifts(gifts = undefined) {
  if (gifts === undefined)
    return console.warn("Se esperaba un arreglo de regalos");

  if (!(gifts instanceof Array))
    return console.error(`El valor ${gifts}, No es un arreglo`);

  for (const regalo of gifts) {
    if (typeof regalo !== "string")
      return console.error(`El valor ${regalo}, No es un string`);

    if (regalo === "") return console.error("El regalo no puede estar vacio");

    if (!/\p{Extended_Pictographic}/u.test(regalo))
      return console.error("El regalo no es un Emoji");
  }

  let resultado = [];
  let anchura = gifts.length;
  let numero = 0;
  let resultados = 0;
  let resultadoAnchura = 0;
  let resta = 0;
  let suma = 0;
  let asterisco = "";

  if (gifts.length === 0) {
    return resultado;
  } else {
    for (let i = 0; i <= anchura + 1; i++) {
      if (anchura === 1) {
        numero = gifts.toString().length;
        suma = anchura + 1;
        resultados = numero + suma;
        resultadoAnchura = resultados;
      } else {
        numero = gifts.toString().length;
        resta = anchura - 1;
        resultados = numero - resta;
        resultadoAnchura = resultados / anchura + 2;
      }

      if (i === 0) {
        asterisco = Array(Math.max(0, 1 + Math.ceil(resultadoAnchura))).join(
          "*"
        );
        resultado.push(asterisco);
      }

      if (i > 0 && i < anchura + 1) {
        asterisco = Array(2).join("*") + gifts[i - 1] + Array(2).join("*");
        resultado.push(asterisco);
      }

      if (i === anchura + 1) {
        asterisco = Array(Math.max(0, 1 + Math.ceil(resultadoAnchura))).join(
          "*"
        );
        resultado.push(asterisco);
      }
    }
    return resultado;
  }
}
