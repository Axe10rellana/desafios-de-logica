export default function createXmasTree(height) {
 //validaciones
  if (typeof height !== "number") return console.error("La altura debe ser de tipo numero");

  if (!Number.isInteger(height)) return console.error("La altura debe ser un numero entero");

  if (Math.sign(height) === -1) return console.error("La altura debe ser un numero positivo");

  if (height < 1 && height > 100) return console.error("La altura debe estar en el rango (1 a 100)");

  //algoritmo
  const XMAS_TREE_SYMBOLS = Object.freeze({
    EMPTY: '_',
    LEAF: '*',
    TRUNK: '#',
  });

  const XMAS_TRUNK_HEIGHT = 2;

  function createXmasTreeTop(height) {
    let treeTop = '';
    for (let i = height; i > 0; --i) {
      treeTop += createXmaxTreeTopLevel(height, i);
    }
    return treeTop;
  }

  function createXmaxTreeTopLevel(height, level) {
    const emptySpace = Array(level - 1).fill(XMAS_TREE_SYMBOLS.EMPTY).join('');
    const leavesPart = Array(height - level).fill(XMAS_TREE_SYMBOLS.LEAF).join('');
    return emptySpace + leavesPart + XMAS_TREE_SYMBOLS.LEAF + leavesPart + emptySpace + '\n';
  }

  function createXmasTrunk(height) {
    const emptySpace = Array(height - 1).fill(XMAS_TREE_SYMBOLS.EMPTY).join('');
    return [...Array(XMAS_TRUNK_HEIGHT)].reduce(trunk => trunk += emptySpace + XMAS_TREE_SYMBOLS.TRUNK + emptySpace + '\n', '');
  }

  return (createXmasTreeTop(height) + createXmasTrunk(height)).trim();
}
