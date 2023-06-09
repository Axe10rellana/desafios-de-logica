import checkStepNumbers from "./app.js";

const systemNames1 = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"];
const stepNumbers1 = [1, 33, 10, 2, 44, 20];
const systemNames2 = ["tree_1", "tree_1", "house"];
const stepNumbers2 = [2, 1, 10];

console.info(checkStepNumbers(systemNames1, stepNumbers1));
console.info(checkStepNumbers(systemNames2, stepNumbers2));
