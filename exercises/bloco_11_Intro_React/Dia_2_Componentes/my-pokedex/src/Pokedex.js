import React, { Component } from 'react'
import Pokemon from './Pokemon'

const { pokemons } = this.props;
 class Pokedex extends Component {
  render() {
    
    return (
      <>
        {pokemons.map((pokemon) => <Pokemon poke={pokemon} key={pokemon.id}/>)}
      </>     
    )
  }
}

export default Pokedex;