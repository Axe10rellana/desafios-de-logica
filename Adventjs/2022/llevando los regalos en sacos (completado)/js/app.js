export default function carryGifts(gifts, maxWeight) {
  //validaciones
  if (typeof maxWeight !== "number") return [];

  if (!Number.isInteger(maxWeight)) return [];

  if (Math.sign(maxWeight) === -1) return "El numero no debe ser negativo";

  if (maxWeight === 0) return "El numero no debe ser 0";

  if (!(gifts instanceof Array)) return "El valor debe ser un array";

  if (gifts.length === 0) return "El array no debe estar vacio";

  for (let gift of gifts)
    if (typeof gift !== "string") return "El valor debe ser un string";

  if (!gifts.every((gift) => maxWeight >= gift.length)) return [];

  //variables
  let carry = [""];

  //algoritmo
  gifts.forEach((gift) => {
    const previousWeight = carry.at(-1).replace(/ /g, "").length;
    if (previousWeight + gift.length <= maxWeight) {
      carry[carry.length - 1] += " " + gift;
      carry[carry.length - 1] = carry[carry.length - 1].trim();
      return;
    }
    carry.push(gift);
  });

  return carry;
}
