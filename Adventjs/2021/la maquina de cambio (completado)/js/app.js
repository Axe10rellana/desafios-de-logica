export default function getCoins(change) {
  //validaciones
  if (typeof change !== "number") return console.error("El valor debe ser de tipo numero");

  if (!Number.isInteger(change)) return console.error("El numero debe ser entero");

  if (Math.sign(change) === -1) return console.error("El numero debe ser positivo");

  const coins = [1, 2, 5, 10, 20, 50].reverse();
  return coins.map(coin => {
    const div = parseInt(change / coin);
    change = change % coin;
    return div >= 1 ? div : 0;
  }).reverse();
}
