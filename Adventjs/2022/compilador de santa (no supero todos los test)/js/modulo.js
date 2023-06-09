import executeCommands from "./app.js";

const commands1 = ["MOV 5,V00", "MOV 10,V01", "DEC V00", "ADD V00,V01"];
const commands2 = ["MOV 255,V00", "INC V00", "DEC V01", "DEC V01"];
const commands3 = ["MOV 10,V00", "DEC V00", "INC V01", "JMP 1", "INC V06"];

//resultados
console.info(executeCommands(commands1));
console.info(executeCommands(commands2));
console.info(executeCommands(commands3));
