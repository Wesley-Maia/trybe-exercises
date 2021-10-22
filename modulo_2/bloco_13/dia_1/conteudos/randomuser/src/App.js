import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.renderData = this.renderData.bind(this);

    this.state = {
      loading: true,
      resultsObj: [],
    }
  }

  async fetchRandomUser() {
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState()!
      async () => {
        const requestReturn = await fetch('https://api.randomuser.me/')
        const requestObject = await requestReturn.json();
        const requestResults = await requestObject.results;
        this.setState({
          loading: false,
          resultsObj: requestResults
        });
      });
  }

  componentDidMount() {
    this.fetchRandomUser();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    // console.log(nextState.resultsObj[0]);
    return false;
  }

  renderData(user) {
    return (
      user.map((currentUser, index) => {
        return (
          <div key={index}>
            <p> {currentUser.name.first} </p>
            <p> {currentUser.dob.age} </p>
            <p> {currentUser.email} </p>
            <img src={ currentUser.picture.thumbnail } alt={ currentUser.name.first } />
          </div>
        )
      })
    );
  }

  render() {
    const { resultsObj, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        {loading ? loadingElement : this.renderData(resultsObj)}
      </div>
    );
  }
}

export default App;
