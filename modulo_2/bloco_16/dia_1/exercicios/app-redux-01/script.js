// =======================================================================================
/* 
1 - Crie uma store para a nossa aplicação.
2 - Crie um reducer, implementando um switch retornando apenas o estado inicial como 
default. Não se esqueça de colocar o reducer como parâmetro para o createStore , feito na 
etapa anterior.
3 - Incremente o switch criado no exercício anterior com as actions NEXT_COLOR e 
PREVIOUS_COLOR. Essas actions devem alterar o valor index guardado no ESTADO_INICIAL. 
Atente-se aos limites de tamanho do array, as posições devem iniciar em 0 e não podem 
exceder a numeração do último item do array.
4 - Crie eventListeners que escutam os cliques de cada botão, o Previous color e o Next 
color , e realizam um dispatch com o respectivo action.type de cada.
5 - Faça o subscribe da store, alterando o innerHTML da tag com id value para a cor atual 
e o style do elemento com id container . Você deverá ser capaz de ver as cores mudando ao 
fundo, e o nome da cor exibida.
6 - Crie um botão com o texto  , um eventListener e uma action no reducer 
adicionando uma cor aleatória ao array colors guardado em nosso estado inicial. Faça 
também com que essa cor seja mostrada ao ser criada, alterando o estado index para a 
posição dela. Para facilitar, segue uma função que gera cores aleatórias: 
*/

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

// ====================== ACTIONS ======================
const nextColor = () => {
  return ({ type: 'NEXT_COLOR' })
}

const previousColor = () => {
  return ({ type: 'PREVIOUS_COLOR' })
}

const randomColor = () => {
  return ({ type: 'RANDOM_COLOR' })
}

// ====================== REDUCER ======================
const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      };
    default: 
      return state;
  }
}

// ======================= STORE =======================
const store = Redux.createStore(reducer);

// ===================== SUBSCRIBE =====================
store.subscribe(() => {
  const { colors, index } = store.getState();
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
});

// ===================== DISPATCH ======================
document.getElementById('previous').addEventListener('click', () => {
  store.dispatch(previousColor());
});

document.getElementById('next').addEventListener('click', () => {
  store.dispatch(nextColor());
});

document.getElementById('random').addEventListener('click', () => {
  store.dispatch(randomColor());
});
