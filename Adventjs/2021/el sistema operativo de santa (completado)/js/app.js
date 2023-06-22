export default function fixFiles(files) {
  //validaciones
  if (!(files instanceof Array)) return console.error(`El valor ${files}, No es un arreglo`);

  if (files.length === 0) return console.error("El arreglo no puede estar vacio");

  for (let file of files) {
    if (typeof file !== "string") return console.error(`El valor ${file}, No es un string`);

    if (file === "") return console.error("El string no puede estar vacio");
  }

  //algoritmo
  let goodFiles = [];
  let ayuda = {};
  let fileName;

  for (let i = 0; i < files.length; i++) {
    if (ayuda[files[i]] != undefined) {
      fileName = `${files[i]}(${ayuda[files[i]]})`;
      ayuda[files[i]]++;
    } else {
      ayuda[files[i]] = 1;
      fileName = files[i];
    }
    goodFiles.push(fileName);
  }
  return goodFiles;
}
