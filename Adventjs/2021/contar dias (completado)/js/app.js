export default function daysToXmas(date = undefined) {
  if (date === undefined) return console.warn("No ingresaste la fecha");

  if (!(date instanceof Date))
    return console.error(`El valor ${date} No es una fecha valida`);

  let navidadMenosFecha = new Date("Dec 25, 2021").getTime() - date.getTime();
  let diasEnMS = 1000 * 60 * 60 * 24;
  let cantidadDias = Math.ceil(navidadMenosFecha / diasEnMS);

  return Math.sign(cantidadDias) === -1
    ? cantidadDias
    : Math.sign(cantidadDias) === 1
    ? cantidadDias
    : cantidadDias;
}
