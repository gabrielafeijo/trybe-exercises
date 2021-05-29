import React, { Component } from 'react'
import MyInput from './MyInput'
import inputState from './inputState'
export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
    }

    this.handleChanges = this.handleChanges.bind(this) 

  }

  handleChanges (evento) {
    const { target } = evento
    const { name } = target
    this.setState({
      [ name ]: target.value
    })
    console.log(target.value)
  }


  render() {
    return (
      <form>
        <fieldset>
          <legend>Formulário Bloco 12</legend>
          <label>Name: 
            <input onChange = {this.handleChanges} type="text" name="nome" maxLength = '40' placeholder="Digite seu nome aqui" /* style={{textTransform:'uppercase'}} */  value={this.state.nome.toUpperCase()} required/>
          </label>
          <label>Email: 
            <input onChange = {this.handleChanges} type="text" name="email" placeholder="Digite seu email aqui" maxLength = '50' value={this.state.email}required/>
          </label>
          <label>CPF: 
          <input onChange = {this.handleChanges} type="text" name="cpf" maxLength = '11' placeholder="Digite seu CPF aqui"  value={this.state.cpf} required />
          </label>
          <label>Endereço: 
          <input onChange = {this.handleChanges} type="text" name="endereco" maxLength = '200' placeholder="Digite seu endereço aqui"  value={this.state.endereco.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')} required />
          </label>
          <label>Cidade: 
          <input onChange = {this.handleChanges} type="text" name="cidade" maxLength = '28' placeholder="Digite seu cidade aqui"  value={this.state.cidade} required />
          </label>
          <MyInput handleChanges = {this.handleChanges}/>
          <label>Estado: 
          <select onChange = {this.handleChanges} type="ComboBox" name="estado" maxLength = '28' placeholder="Digite seu cidade aqui"  value={this.state.estado.inputState} required />
          </label>
          


        </fieldset>
      </form>
    )
  }
}
