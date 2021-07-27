import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemonInfo } = this.props;

    return (
      <section className="serie-card">
        <h1>{pokemonInfo.name}</h1>
        <div className="general-card">
          <div className="data-card">
            <p>Tipo: {pokemonInfo.type}</p>
            <p>Peso médio: {pokemonInfo.averageWeight.value} {pokemonInfo.averageWeight.measurementUnit}</p>
          </div>
          <div className="poke-card">
            <img src={pokemonInfo.image} alt={pokemonInfo.name} />
          </div>
        </div>
      </section>
    );
  }
}

export default Pokemon;