import React, { Component } from 'react'



export default class Button1 extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0,
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    console.log(this.state.numeroDeCliques % 2 === 1 ? 'green' : 'red') //colocar 1 para inverter o console conforme a cor em display no botão
  }
  
  render() {
    return (
      <button onClick={this.handleClick} style={{backgroundColor : this.state.numeroDeCliques % 2 === 0 ? 'green' : 'red'}}>{`Salvar : ${this.state.numeroDeCliques}`}</button> 
    )
  }
}
