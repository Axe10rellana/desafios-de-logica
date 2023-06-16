export default function groupBy(collection, it) {
  //validaciones
  if (!(collection instanceof Array)) return console.error(`El valor ${collection}, No es un arreglo`);

  if (collection.length === 0) return {};

  //algoritmo
  const fn = item => typeof it === 'string' ? item[it] : it(item);
  return collection.reduce(
    (accum, item) => ({ ...accum, [fn(item)]: [...(accum[fn(item)] ?? []), item] })
    , {}
  );
}
