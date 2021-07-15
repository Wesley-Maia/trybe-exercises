//const bebidas = ['coca-cola', 'sukita', 'agua', 'garapa', 'suco de uva', 'groselha'];

const removeBebida = (array, remover) => {
  array.splice(array.indexOf(`${remover}`), 1);
  return array
};

//console.log(bebidas)
//console.log(removeBebida(bebidas, 'agua'))

module.exports = removeBebida;
