import React, { Component } from 'react'

export default class Button3 extends Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
    
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    
    console.log(this.state.numeroDeCliques % 2 === 1 ? 'green' : 'red') 
  }

  render() {
    return (
      <button onClick={this.handleClick} style={{backgroundColor : this.state.numeroDeCliques % 2 === 0 ? 'green' : 'red'}}>Selecionar</button> 
    )
  }
}
