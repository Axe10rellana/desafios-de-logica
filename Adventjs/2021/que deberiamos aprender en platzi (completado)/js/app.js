export default function learn(time, courses) {
  //validaciones
  if (typeof time !== "number") return console.error(`El valor ${time}, No es un numero`);

  if (!Number.isInteger(time)) return console.error("El numero debe ser entero");

  if (Math.sign(time) === -1) return console.error("El numero debe ser positivo");

  if (!(courses instanceof Array)) return console.error(`El valor ${courses}, No es un arreglo`);

  if (courses.length === 0) return console.error("El arreglo no puede estar vacio");

  for (let course of courses) {
    if (typeof course !== "number") return console.error(`El valor ${course}, No es un numero`);

    if (!Number.isInteger(course)) return console.error("El numero debe ser entero");

    if (Math.sign(course) === -1) return console.error("El numero debe ser positivo");
  }

  //algoritmo
  let solution = {};

  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      if (courses[i] + courses[j] <= time) {
        if (courses[i] + courses[j] === time) {
          return [i, j];
        }
        solution[courses[i] + courses[j]] = [i, j];
      }
    }
  }
  return Object.keys(solution).length === 0
    ? null
    : solution[Object.keys(solution)[Object.keys(solution).length - 1]];
}
