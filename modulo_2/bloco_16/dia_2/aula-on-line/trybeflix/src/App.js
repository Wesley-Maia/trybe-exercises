import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import categories from './data'
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header'
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: categories,
      selectedCategory: {
      },
      selectedMovie: {
       
      },
    }
  }

  render() {
    const {categories, selectedCategory, selectedMovie} = this.state
    return (
      <Provider store={store}>
        <Header />
        <main className="main">
            <Player />
            <Sidebar  />
        </main>
      </Provider>
    );
  };
}

export default App;
