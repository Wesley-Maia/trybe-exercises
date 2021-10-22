import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { Content, Header } from './components';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;