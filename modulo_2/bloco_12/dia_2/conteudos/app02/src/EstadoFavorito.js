import React, { Component } from 'react'
import './Form.css'

class EstadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props;
    let error = undefined;

    if (value.length > 120) error = "Texto muito grande!";

    return (
      <label>
      Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
      <textarea
        name="estadoFavorito"
        value={value}
        onChange={handleChange}
      />
      <span>{error !== undefined? error : ''}</span>
    </label>
    )
  }
}

export default EstadoFavorito