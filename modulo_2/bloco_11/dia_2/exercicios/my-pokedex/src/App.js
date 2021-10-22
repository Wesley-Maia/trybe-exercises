import React from 'react';
import Pokedex from './Components/Pokedex';
import catalog from './data';
import './App.css';

class App extends React.Component {
  render() {
    // lógica
    // propriedades

    return (
      <main className="main-container">
        <h1>Pokedex</h1>
        <Pokedex data={catalog} />
      </main>
    );
  }
}

export default App;
