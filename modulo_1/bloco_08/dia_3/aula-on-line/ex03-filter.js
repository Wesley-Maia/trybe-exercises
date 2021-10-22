// =======================================================================================
// Array.filter()
// Encontrar todas as cidades que começam com C

const cities = [
  {state: 'MG', name: 'Nepomuceno', region: 'SE'},
  {state: 'BA', name: 'Cachoeira', region: 'NE'},
  {state: 'PR', name: 'Curitiba', region: 'S'},
  {state: 'SP', name: 'Hortolândia', region: 'SE'},
  {state: 'RN', name: 'Touros', region: 'NE'},
  {state: 'CE', name: 'Jericoacoara', region: 'NE'},
  {state: 'TO', name: 'Três Pedras', region: 'N'},
];

console.log('As cidades que ficam na região Nordeste são:')

const citiesC = cities.filter((city) => {
  // return city.name[0] === 'C';
  // return city.name.endsWith('o');
  return city.name.startsWith('C');
});

console.log(citiesC);

