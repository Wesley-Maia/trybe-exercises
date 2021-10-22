import React from 'react';
import './App.css';
import colors from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="App">
        <ul>
          {colors
            .filter((color) => {
              console.log(inputValue);
              console.log(color.name.includes(inputValue));
              return color.name.includes(inputValue)})
            .map((color) => 
              <li key={color.hex}>
                <div className="square-color" style={ { background: color.hex } }></div>
                {color.name}
              </li>
            )}
        </ul>
        <label htmlFor="search">
          <input type="text" id="search" onChange={this.handleChange}/>
        </label>
      </div>
    );
  }
}

export default App;
