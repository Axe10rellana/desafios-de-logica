import contains from "./app.js";

const store = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta'
    }
  }
}
const product = "camiseta";
const isFound = contains(store, product);

//respuesta
console.info(isFound);