const CHANGE_TO_DARK = 'CHANGE_TO_DARK';
const CHANGE_TO_LIGHT = 'CHANGE_TO_LIGHT';
const CHANGE_THEME = 'CHANGE_THEME'

// ====================== ACTIONS ======================
const changeToDark = () => {
  return ({ type: 'CHANGE_TO_DARK' })
}

const changeToLight = () => {
  return ({ type: 'CHANGE_TO_LIGHT' })
}

const changeTheme = () => ({type: CHANGE_THEME})

// ====================== REDUCER ======================
const INITIAL_STATE = {
  theme: 'light',
}

// PARAMS => (ESTADO, ACTION)
// ACTION => { type: '', ... }
const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_TO_DARK:
      return { theme: 'dark' };
    case CHANGE_TO_LIGHT:
      return { theme: 'light' };
    case CHANGE_THEME: 
      return { theme: state.theme === 'light' ? 'dark' : 'light'}
    default: 
      return state;
  }
}

// ======================= STORE =======================
const store = Redux.createStore(reducer);

// ===================== SUBSCRIBE =====================
store.subscribe(() => {
  const { theme } = store.getState();
  document.getElementById('light-bulb').src = 
    `img/${theme === 'light' ? 'light' : 'dark'}.png`;
  
  document.getElementById('wrapper').className = theme;
});

// ===================== DISPATCH ======================
document.getElementById('light-switch').addEventListener('click', () => {
  store.dispatch(changeTheme())
  // const { theme } = store.getState();
  // if(theme === 'light') {
  //   store.dispatch(changeToDark());
  // }
  // if(theme === 'dark') {
  //   store.dispatch(changeToLight());
  // }
});
