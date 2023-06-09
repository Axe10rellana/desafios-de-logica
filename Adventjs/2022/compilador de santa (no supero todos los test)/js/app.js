export default function executeCommands(commands) {
  //validaciones
  if (!(commands instanceof Array)) return "El valor debe ser un array";

  if (commands.length === 0) return "El array no debe estar vacio";

  for (let command of commands) {
    if (typeof command !== "string") return "El valor debe ser un string";

    if (command === "") return "El valor no debe estar vacio";
  }

  //variables
  let cpu = [0, 0, 0, 0, 0, 0, 0, 0];

  let cmd = {
    MOV: (x) => {
      let mov = x.split(",")[0].split(" ")[1];
      cpu[+x.at(-1)] = cpu[+mov.at(-1)] * +mov.startsWith("V") + ~~mov;
    },
    ADD: (x) => {
      let v1 = +x.split(",")[0].at(-1);
      let v2 = +x.split(",")[1].at(-1);
      cpu[v1] = (cpu[v1] + cpu[v2]) & 256;
    },
    INC: (x) => {
      cpu[+x.at(-1)] = (cpu[+x.at(-1)] + 1) & 255;
    },
    DEC: (x) => {
      cpu[+x.at(-1)] = (cpu[+x.at(-1)] - 1) & 255;
    },
    JMP: (x) => {
      commands = commands.concat(
        commands.slice(
          +x.split(" ").at(-1),
          (commands.indexOf(x) + 1) * !!cpu[0]
        )
      );
    },
  };

  for (let i = 0; i < commands.length; i++) {
    cmd[commands[i].split(" ")[0]](commands[i]);
  }

  return cpu;
}
