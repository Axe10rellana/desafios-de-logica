export default function canMouseEat(direction, game) {
   //validaciones
  if (typeof direction !== "string")
    return console.error("El valor debe ser de tipo string");

  if (direction === "") return console.error("El string no puede estar vacio");

  if (!(game instanceof Array)) return console.error(`El valor ${game} debe ser de tipo array`);

  if (game.length === "") return console.error("El array no puede ir vacio");

  for (let g of game) {
    if (!(g instanceof Array)) return console.error(`El valor ${g} debe ser de tipo array`);

    if (g.length === "") return console.error("El array no puede ir vacio");

    for (let element of g) {
      if (typeof element !== "string") return console.error("El valor debe ser de tipo string");
    }
  }

  //algoritmo
  const [rowIdx, colIdx] = game
    .map((row, idx) => {
      if (row.includes("m")) return [idx, row.indexOf("m")];
      return false;
    })
    .filter(Boolean)[0];

  const moves = {
    up: game?.[rowIdx - 1]?.[colIdx],
    down: game?.[rowIdx + 1]?.[colIdx],
    left: game?.[rowIdx]?.[colIdx - 1],
    right: game?.[rowIdx]?.[colIdx + 1],
  };

  return moves[direction] === "*";
}