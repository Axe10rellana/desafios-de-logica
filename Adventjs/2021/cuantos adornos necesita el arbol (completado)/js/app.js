export default function countDecorations(bigTree) {
  //validaciones
  if (typeof bigTree !== "object")
    return console.error("El valor debe ser de tipo objeto");

  //algoritmo
  return bigTree
    ? bigTree.value +
    countDecorations(bigTree.left) +
    countDecorations(bigTree.right)
    : 0;
}
