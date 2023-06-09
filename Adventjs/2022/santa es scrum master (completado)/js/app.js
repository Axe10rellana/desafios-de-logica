export default function getCompleted(part, total) {
  //validaciones
  if (typeof part !== "string")
    return console.error("El valor debe ser de tipo string");

  if (part === "") return console.error("El string no debe estar vacio");

  if (typeof total !== "string")
    return console.error("El valor debe ser de tipo string");

  if (total === "") return console.error("El string no debe estar vacio");

  part = part.trim();
  total = total.trim();

  //algoritmo
  const MCD = (a, b) => {
    let c;
    while (b) {
      c = b;
      b = a % b;
      a = c;
    }
    return a;
  };

  part = part.split(":");
  total = total.split(":");

  let partRed = +part[0] * 3600 + +part[1] * 60 + +part[2];
  let totalRed = +total[0] * 3600 + +total[1] * 60 + +total[2];
  const MCDof = MCD(partRed, totalRed);

  const partEnd = partRed / MCDof;
  const totalEnd = totalRed / MCDof;

  return partEnd + "/" + totalEnd;
}
