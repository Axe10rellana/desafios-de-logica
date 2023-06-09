export default function decorateTree(base) {
  //validaciones
  if (typeof base !== "string")
    return console.error("El valor debe ser de tipo string");

  if (base === "") return console.error("El string no debe estar vacio");

  base = base.trim();
  base = base.toUpperCase();

  if (!/^[BPR]( [BPR])*$/.test(base))
    return console.error(
      "El string solo permite las letras B, R, P separadas por espacios"
    );

  //variables
  const dict = {
    PP: "P",
    BB: "B",
    RR: "R",
    BP: "R",
    PB: "R",
    BR: "P",
    RB: "P",
    PR: "B",
    RP: "B",
  };
  base = base.split(" ");
  let list = new Array(base.length).fill(base);

  //algoritmo
  return list
    .reduce(
      (total, x) =>
        total.concat([
          new Array(total.at(-1).length - 1).fill("-").map((_, i) => {
            return dict[
              total
                .at(-1)
                .slice(i, i + 2)
                .join("")
            ];
          }),
        ]),
      [base]
    )
    .slice(0, base.length)
    .map((x) => x.join(" "))
    .reverse();
}
