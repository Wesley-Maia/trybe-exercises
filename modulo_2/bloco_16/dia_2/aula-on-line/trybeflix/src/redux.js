import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from './data';

const INITIAL_STATE = {
  categories: categories,
  selectedCategory: {},
  selectedMovie: {},
}

const movieReducer = (state = INITIAL_STATE, action) => {
  return state;
}

const rootReducer = combineReducers({ movieReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;