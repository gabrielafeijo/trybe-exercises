import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.poke;
    
    return (
      <section className="pokemon">
        <img src={image} alt={name}/>
        <p> {name}</p>
        <p> Qual {type} </p> 
        <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
      </section>
    )
  }
}

export default Pokemon;

Pokemon.propTypes = {
  poke: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.number,
  })
}
