import React, { Component } from 'react';
//import React from 'react'; --> class NameAndDescription extends React.Component {

class NameAndDescription extends Component {
  render() {
    return (
    <div> 
      <h1>Gabriela Feijó</h1>
        <p> Gabriela está super batalhando para dar conta desse curso, pois está bastante animada com tudo que irá fazer. Mágica!</p> 
    </div>)
  }
}

/* function nameAndDescription () {
  return <div> <h1>Gabriela Feijó</h1>
        <p> Gabriela está super batalhando para dar conta desse curso, pois está bastante animada com tudo que irá fazer. Mágica!</p> 
    </div>
} */

export default NameAndDescription;