export default function howManyReindeers(reindeerTypes, gifts) {
  //validaciones
  if (!(reindeerTypes instanceof Array)) return "El valor debe ser un array";

  if (reindeerTypes.length === 0) return "El array no debe estar vacio";

  for (let reindeerType of reindeerTypes) {
    if (typeof reindeerType !== "object") return "El valor debe ser un objeto";

    if (reindeerType === null) return "El valor debe ser un objeto";

    if (Object.keys(reindeerType).length === 0)
      return "El objeto no puede estar vacio";
  }

  if (!(gifts instanceof Array)) return "El valor debe ser un array";

  if (gifts.length === 0) return "El array no debe estar vacio";

  for (let gift of gifts) {
    if (typeof gift !== "object") return "El valor debe ser un objeto";

    if (gift === null) return "El valor debe ser un objeto";

    if (Object.keys(gift).length === 0) return "El objeto no puede estar vacio";
  }

  //algoritmo
  return gifts.map((gift) => {
    let max = gift.weight;
    let reindeers = reindeerTypes
      .map((x) => [x.type, x.weightCapacity])
      .filter((x) => x[1] < max)
      .sort((a, b) => a[1] - b[1]);

    let res = reindeers.map(([type]) => ({
      type,
      num: 0,
    }));

    reindeers.map((_, i) => {
      let sliced = reindeers.slice(0, reindeers.length - i);
      let sum = sliced.reduce((sum, e) => sum + e[1], 0);
      sliced.map((_, i) => {
        res[i].num += Math.floor(max / sum);
      });
      max %= sum;
    });

    return {
      country: gift.country,
      reindeers: res.reverse(),
    };
  });
}
