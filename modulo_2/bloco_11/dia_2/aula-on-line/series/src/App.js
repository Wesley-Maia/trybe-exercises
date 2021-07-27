import React from 'react';
import SeriesList from './components/SeriesList';
import catalog from './data';
import './App.css';

class App extends React.Component {
  render() {
    // lógica
    // propriedades

    return (
      <main className="main-container">
        <SeriesList catalogData={catalog} />
      </main>
    );
  }
}

export default App;
