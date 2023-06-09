export default function printTable(gifts) {
  //validaciones
  if (!(gifts instanceof Array)) return "El valor debe ser un array";

  if (gifts.length === 0) return "El array no debe estar vacio";

  for (let gift of gifts) {
    if (typeof gift !== "object") return "El valor debe ser un objeto";

    if (gift === null) return "El valor debe ser un objeto";

    if (Object.keys(gift).length === 0) return "El objeto no puede estar vacio";
  }

  //algoritmo
  gifts = gifts.map((x) => [x.name, "" + x.quantity]);
  gifts.unshift(["Gift", "Quantity"]);

  let lengthGift = Math.max(...gifts.map((x) => x[0].length));
  let lengthQuantity = Math.max(...gifts.map((x) => x[1].length));

  gifts.splice(1, 0, ["-".repeat(lengthGift), "-".repeat(lengthQuantity)]);

  let tables = gifts.reduce(
    (str, x) =>
      str +
      "| " +
      x[0].padEnd(lengthGift) +
      " | " +
      x[1].padEnd(lengthQuantity) +
      " |" +
      "\n",
    ""
  );

  let top = "+".repeat(lengthGift + lengthQuantity + 7) + "\n";
  let bottom = "*".repeat(lengthGift + lengthQuantity + 7);

  return top + tables + bottom;
}
