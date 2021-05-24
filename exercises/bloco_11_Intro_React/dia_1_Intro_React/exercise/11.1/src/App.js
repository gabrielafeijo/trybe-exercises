import React from 'react'
import './App.css';

const Task = (value) => {
  return (
    <li key={value.toString()}>{value}</li> //https://reactjs.org/docs/lists-and-keys.html#keys
  );
}

const commitments = ['Estudar Conteúdo de React', 'Revisar Conteúdo de React',  'Tirar 10 no Conteúdo de React']
//por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App .

function App() {
  return (
   <ol>{commitments.map((commitment) => Task(commitment))}</ol> 
  );
}

export default App;


/* 
<div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */