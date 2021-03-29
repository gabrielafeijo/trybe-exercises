//Objetos
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { 
    golden: 2, 
    silver: 3 
  },
}

console.log('A jogadora' + ' ' + player.name + ' ' + player.lastName + ' ' + 'tem' + ' ' + player.age + ' ' + 'anos de idade.')

player ['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log('A jogadora' + ' ' + player.name + ' ' + player.lastName + ' ' + 'foi eleita a melhor do mundo por' + ' ' + player.bestInTheWorld.length + ' ' + 'vezes.');

console.log('A jogadora possui' + ' ' + player.medals.golden + ' ' + 'medalhas de ouro' + ' ' +  'e' + ' ' +  player.medals.silver + ' ' + 'medalhas de prata.')

//For/in
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
  console.log(position);
}

for (let value of food) {
  console.log(value);
}

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
} 

for (let indice in names) {
  console.log('Olá ' + names[indice]);
}


let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (let i in carro) {
  console.log(i + ':', carro[i]);
}

//Funções