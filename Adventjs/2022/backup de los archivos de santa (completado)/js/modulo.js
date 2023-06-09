import getFilesToBackup from "./app.js";

const lastBackup = 1546300800;
const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
];
const respuesta = getFilesToBackup(lastBackup, changes);
console.info(respuesta);
