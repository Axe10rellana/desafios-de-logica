export default function canExit(maze) {
  //validaciones
  if (!(maze instanceof Array)) return "El valor debe ser un array";

  if (maze.length === 0) return "El array no debe estar vacio";

  for (let ways of maze) {
    if (!(ways instanceof Array)) return "El valor debe ser un array";

    if (ways.length === 0) return "El array no debe estar vacio";

    for (let way of ways) {
      if (typeof way !== "string")
        return console.error("El valor debe ser un string");
    }
  }

  //variables
  let x = [];

  //algoritmo
  function replace(str) {
    return str
      .replace(/[S][\sE]/g, "SS")
      .replace(/[\sE][S]/g, "SS")
      .split("");
  }

  for (let i = 0; i < maze[0].length * maze.length; i++) {
    let check = [...maze];

    maze.forEach((horizontal, index) => {
      maze[index] = replace(horizontal.join(""));
      let v = maze[0].map((_, i) => replace(maze.map((x) => x[i]).join("")));
      maze[index] = v.map((x) => x[index]);
    });

    if (check.flat().join("") === maze.flat().join("")) {
      x.push(check);
    }
  }

  return !x.flat(2).includes("E");
}
