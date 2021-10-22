// =======================================================================================
const { encode, decode } = require('./challenges.js');
const { techList, hydrate } = require('./challenges2.js');

/* Para as funções encode e decode crie os seguintes testes:
1- Teste se encode e decode são funções;
2- Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, 
respectivamente;
3- Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, 
i, o, u , respectivamente;
4- Teste se as demais letras/números não são convertidos para cada caso;
5- Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a 
string passada como parâmetro. */

describe('ENCODE', () => {
  it('Requisito 1', () => {
    expect(typeof (encode)).toEqual('function');
  });
  it('Requisito 2', () => {
    expect('12345').toEqual(encode('aeiou'));
  });
  it('Requisito 4', () => {
    expect('w2sl2y').toEqual(encode('wesley'));
  });
  it('Requisito 5', () => {
    const name = 'wesley';
    expect(name.length).toEqual(encode('wesley').length);
  });
});

describe('DECODE', () => {
  it('Requisito 1', () => {
    expect(typeof (decode)).toEqual('function');
  });
  it('Requisito 3', () => {
    expect('aeiou').toEqual(decode('12345'));
  });
  it('Requisito 4', () => {
    expect('wesley').toEqual(decode('w2sl2y'));
  });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
