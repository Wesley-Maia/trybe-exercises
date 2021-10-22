// ============================================================================================
/* 4 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e 
retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça 
um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 
'sd-01-week4-5-project-meme-generator' se encontram nessa lista. */

/* 
instale o node-fetch :
npm i node-fetch
 */

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => {
        // console.log(repo.name);
        return repo.name;
      });
    });
};

// getRepos('https://api.github.com/orgs/tryber/repos');

describe('Verifica os repositórios', () => {
  test('Retorna o repositório', async () => {
    const data = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(data).toContain('sd-01-week4-5-project-todo-list');
  });
});
