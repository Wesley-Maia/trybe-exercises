import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    const { ship } = this.props.match.params;
    return (
      <div>
        <Link to="/">Home</Link>
        <p>PROFILE - Como navegar? {this.props.name} te ensina. Sigamos no navio {ship} </p>
      </div>
    );
  }
}

export default Profile;
