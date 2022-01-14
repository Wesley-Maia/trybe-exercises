// 6- Crie um script que mostre na tela o conteúdo de um arquivo escolhido pelo usuário:
// - Pergunte à pessoa usuária qual arquivo ela deseja ler.
// - Leia o arquivo indicado.
// - Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
// - Caso o arquivo exista, escreva seu conteúdo na tela.

// Importamos os módulos que vamos utilizar: fs/promises e readline
const fs = require('fs').promises;
const readline = require('readline');

// Para facilitar a solicitação de input, criamos uma função que utiliza o readline.question , mas retorna uma Promise
function question(message) {
  // Criamos uma variável rl para inicializar
  // o módulo readline, conforme visto na documentação
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    // No entanto, ao abrirmos a pergunta,
    // fazemos isso dentro de uma Promise.
    rl.question(message, (answer) => {
      rl.close();

      // Dessa forma, quando obtivermos a resposta,
      // podemos resolver nossa Promise com essa resposta.
      // Assim, quem chama nossa função não precisa
      // se preocupar com callbacks, e pode obter a resposta
      // através da Promise que retornamos.
      resolve(answer);
    });
  });
}

// Criamos a função que será responsável pelo fluxo todo. Vamos chamá-la de start :
async function start() {
    // Como nossa função `question` retorna uma Promise,
    // podemos utilzar `await` para obter a resposta.
    const fileName = await question('Digite o caminho do arquivo que deseja ler: ');
  
    try {
      // Tentamos realizar a leitura do arquivo
      const fileContent = await readFile(fileName, 'utf-8');
      // E exibir seu resultado na tela
      console.log(fileContent);
    } catch (err) {
      // Caso um erro aconteça, exibimos a mensagem de erro na tela.
      console.log('Arquivo inexistente');
    }
  }
  
  start();
