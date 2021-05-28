import React from 'react';

class Image extends React.Component {
  render() {
    return <div>
      <img src={this.props.source} alt={this.props.alternativeText} />;
      </div>
  }
}

export default Image;
//Qual o nome do componente declarado acima? Image!
//Chame o componente Image , de forma que seja mostrada esta imagem, ou o texto Cute cat staring , caso a imagem não consiga ser carregada.