export default function checkIsSameTree(treeA, treeB) {
  //validaciones
  if (typeof treeA !== "object")
    return console.error("El valor debe ser de tipo objeto");

  if (typeof treeB !== "object")
    return console.error("El valor debe ser de tipo objeto");

  //algoritmo
  return (
    (!treeA && !treeB) ||
    (treeA?.value === treeB?.value &&
      checkIsSameTree(treeA.left, treeB.left) &&
      checkIsSameTree(treeA.right, treeB.right))
  );
}
