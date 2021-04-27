//Parte I
//Exercício 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope} + ' ótimo, fui utilizada no escopo !'`);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

//Exercício 2 -> pq só ordena parte? Pq???
/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortingNumbers = () => `Os números ${oddsAndEvens.sort()} se encontram ordenados de forma crescente!`

console.log(sortingNumbers(oddsAndEvens)); */

/* Adicionei os parâmetros de comparação. Não se engane, o Google te ajudou. Você ainda não entendeu pq o sort não funcionou sozinho. Referência - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort*/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a, b) => a - b);
const sortingNumbers = () => `Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`
console.log(sortingNumbers(oddsAndEvens));

//Parte II
//Exercício 1 - vídeo do Guanabara
/* forma 1
function fatorial(n) {
  let fat = 1;
  for (let index = n; index>1; index -=1) {
    fat *= index
  }
  return fat;
}
console.log(fatorial(6)); */

/* forma 2
function fatorial(n) {
  if (n===1) {
    return 1
  } else {
    return n*fatorial(n-1);
  }
}
console.log(fatorial(6));  */

//Sempre precisa ser dentro da constante? Pq a function não lê?
const fatorial = (n) => (n===1 ? 1 : n*fatorial(n-1));
console.log(fatorial(6));

//Exercício 2
let longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu";

// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
/* newPerson.name = 'Gilberto'; */
console.log(newPerson);
console.log(person);

