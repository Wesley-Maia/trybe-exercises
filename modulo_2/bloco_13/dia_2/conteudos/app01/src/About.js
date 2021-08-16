import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <p>ABOUT - Texto qualquer coisa...</p>
      </div>
    );
  }
}

export default About;
