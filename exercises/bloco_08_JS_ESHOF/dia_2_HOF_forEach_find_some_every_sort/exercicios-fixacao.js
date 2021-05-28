//1 - forEach - E-mails
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList1 = emailListInData.forEach((email, posição, array) => {
  
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
  console.log(`Sua posição é: ${posição}`);
  console.log(array.length);
});

// Acima inclui o forEach na const showEmailList, não precisa chamar de novo;

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
emailListInData.forEach(showEmailList);
// Use o método forEach chamando a callback showEmailList para apresentar os emails.

//2. forEach numbers - element
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

//3. forEach names - index
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names);

//1. array.find
const numbers1 = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers1.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers1.find((number) => number % 2 === 0);

console.log(isEven2); // 30

//1. array.some e array.every
//O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

//O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));

// 1. array.sort
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

//  se deseja ordenar de forma numérica crescente, é necessário passar a função a seguir:
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]
