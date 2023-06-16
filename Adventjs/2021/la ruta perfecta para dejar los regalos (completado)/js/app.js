export default function getMinJump(obstacles) {
  //validaciones
  if (!(obstacles instanceof Array)) return console.error(`El valor ${obstacles}, No es un arreglo`);

  if (obstacles.length === 0) return console.error("El arreglo no debe estar vacio");

  for (let obstacle of obstacles) {
    if (typeof obstacle !== "number") return console.error("El valor debe ser de tipo numero");

    if (!Number.isInteger(obstacle)) return console.error("El numero debe ser entero");

    if (Math.sign(obstacle) === -1) return console.error("El numero debe ser positivo");
  }

  //algoritmo
  let no_multiples = Array.from([...Array(Math.max(...obstacles) + 1).keys()]);
  no_multiples.splice(0, 1);

  obstacles.map((obstacles_index) => {
    no_multiples = no_multiples.filter((number) => obstacles_index % number != 0 || number > obstacles_index);
  });

  return Math.min(...no_multiples);
}
