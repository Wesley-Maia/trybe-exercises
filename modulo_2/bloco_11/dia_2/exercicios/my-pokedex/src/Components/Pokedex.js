import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div className="serie-list">
        {data.map((pokemon) => (<Pokemon key={pokemon.id} pokemonInfo={pokemon} />))}
      </div>
    );
  }
}

export default Pokedex;