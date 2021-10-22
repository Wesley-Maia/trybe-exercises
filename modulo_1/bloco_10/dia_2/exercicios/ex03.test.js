// ============================================================================================
/* O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado 
dessa busca é uma Promise , que é utilizada pelo método getUserName . */

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    };

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

// ============================================================================================
/* 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de 
async/await. */

describe('Quando o usuário é encontrado', () => {
  test('Retorne o nome do usuário', async () => {
    const data = await getUserName(4);
    expect(data).toBe('Mark');
  });
});

describe('Quando o usuário não existe', () => {
  test('Retorne erro', async () => {
    try {
      await getUserName(6);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 6 not found.' })
    }
  });
});