import React, { Component } from 'react'

export default class MyInput extends Component {
  constructor() {
    super()

    this.state = {
      cidade: '',
    }

  }

  handleCidade(evento) {
    const { target } = evento
    const  cidade  = target
    const cidades = document.getElementsByTagName('cidade')
    cidades.addEventListener('onBlur', () => {
      if(cidade.value === !isNaN) {
        this.setState({
      
      cidade : target.value.remove()
    })
      }
      console.log(cidade.value)

    })
  
    console.log(target.value)
  }


  render() {
    const {handleChanges} = this.props
    return (
      <div>
        <label>Cidade: 
          <input onChange = {handleChanges} type="text" name="cidade" maxLength = '28' placeholder="Digite seu cidade aqui" required />
        </label>
      </div>
    )
  }
}
