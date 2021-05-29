//Forms
import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
    };
  }

  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  render() { //Form -> elemento do formulário é um componente controlado
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form"> 
      
        <label>
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <input
            type="number"
            name="idade"
          />
          <input
            type="checkbox"
            name="vaiComparecer"
          />
        <select name="select">
          <option value="valor1">Valor 1</option>
          <option value="valor2" selected>Valor 2</option>
          <option value="valor3">Valor 3</option>
        </select>
        </form>
      </div>
    );
  };
};

export default Form;
//1 - Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado

//Eventhandler genêrico
/* 
handleChange({ target }) {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  this.setState({
    [name]: value,
  });
}
 */

/* Truque
Dê a cada elemento um nome que seja igual à respectiva chave no estado do componente
No handler, recupere a partir do parâmetro event o nome do componente que disparou o evento e o valor associado ao disparo.
Interpole o nome do componente como chave do estado numa sintaxe como a acima. */

// 

import React from 'react';

class Button extends React.Component {
  render() {
    /* A função que altera o estado do componente pai chega
       ao componente filho via `props`! */
    const { handleClick } = this.props;

    return (<button type="button" onClick={handleClick} >Contar clique!</button>);
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    // O componente pai é o dono do estado!
    this.state = {
      numeroDeCliques: 0,
    };
  }

  /* A função de alterar o estado é definida no componente pai*/
  handleClick() {
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  /* O componente filho recebe a função de alterar estado do pai via `props`,
     na forma de uma callback */
  render() {
    return (
      <div>
        <h1>{`${this.state.numeroDeCliques} cliques!`}</h1>
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App