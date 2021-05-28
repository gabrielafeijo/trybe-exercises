import './App.css';
import Button1 from './Button1'
import Button2 from './Button2';
import Button3 from './Button3';

function App() {
  return (
    <>
   <Button1 />
   <Button2 />
   <Button3 />
   </>
  );
}

export default App;
/* 
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
 /*    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App; */
