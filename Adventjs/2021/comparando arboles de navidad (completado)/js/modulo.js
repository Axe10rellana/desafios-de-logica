import checkIsSameTree from "./app.js";

const treeA = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

const treeB = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

const isSame = checkIsSameTree(treeA, treeB);

//respuesta
console.info(isSame);