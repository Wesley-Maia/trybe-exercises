import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import About from './About';
import HowTo from './HowTo'
import Profile from './Profile'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/howto" component={HowTo} />
          <Route path="/profile/:ship" render={(props) => <Profile {...props} name="Wesley" />} />
          <Route exact path="/"> <Home /> </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
