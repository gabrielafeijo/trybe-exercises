import React, { Component } from 'react'

const estados = ['', 'Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espirito Santo','Goiás','Maranhão','Mato Grosso do Sul','Mato Grosso','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']; 
export default class InputState extends Component { 
  
  render() {

    return (  
      <select>
      {
        estados.map((value, key) => (
          <option key={ key }>{ value }</option>
        ))
        
      }
      </select>
);