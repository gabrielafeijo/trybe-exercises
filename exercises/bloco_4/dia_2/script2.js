//1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index=0; index <numbers.length; index+=1) {
  console.log (numbers[index]);
}

for (let indice of numbers) {
  console.log (indice);
}

//a. Define a variável numbers em um array;
//b. Insere a função for;
//c. Insere a variável contadora index; 
//d. Informa a posição inicial (0);
//e. Informa o percurso - a partir do contador (0 - posição inicial) passando por todo o array (numbers.lenght) - isto é, uma condição!;
//f. Incrementa o contador (index) em uma posição (+=1);
//g. Imprime (console.log) toda a variável numbers (numbers[index]);

//a. Define a variável numbers em um array;
//b. Insere a função for of (let variável/contador (indice) (AQUI IDENTIFICA COMO VARIÁVEL OU CONTADOR?) of array (numbers));
//c. Imprime (console.log) toda a variável (indice).

// Eu resolvi o problema? Sim. Havia outras maneiras de resolver o problema? Sim. A maneira que eu escolhi foi a mais eficiente possível? Não, o for of era mais eficiente. Seria possível inverter ou retirar algum passo? Acredito que não. Se eu fosse um computador, conseguiria entender todas as intruções? Sim!

//2 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let sum = 0;
for (let indice=0; indice <numbers.length; indice+=1) {
  sum += numbers[indice];  
}
console.log(sum);

for (let sum of numbers) {
  sum += numbers;
}
console.log(sum);
//a. Definir variável soma;
//b. Insere a função for;
//c. Insere a variável contadora (indice); 
//d. Informa a posição inicial (0);
//e. Informa o percurso - a partir do contador (0 - posição inicial) passando por todo o array (numbers.lenght) - isto é, uma condição!;
//f. Incrementa o contador (index) em uma posição (+=1);
//g. Atualiza o valor da variável soma (sum += numbers[indice] --> sum = sum + numbers[indice]);
//h. Imprime a soma;

//a. Definir variável soma;
//b. Insere a função for of (let variável (sum) of array (numbers));
//c. Imprime (console.log) toda a variável (indice).

// Eu resolvi o problema? Sim. Havia outras maneiras de resolver o problema? Sim. A maneira que eu escolhi foi a mais eficiente possível? Não, o for of era mais eficiente. Seria possível inverter ou retirar algum passo? Acredito que não. Se eu fosse um computador, conseguiria entender todas as intruções? Sim!

//3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = sum/ numbers.length;

console.log(media);

//4 - Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media>20) {
  console.log ('valor maior que 20')
}else{
  console.log ('valor menor ou igual a 20')
}

//5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let higherNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);

//6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let odd = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    odd += 1;
  }
}

//7 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

if (odd === 0) {
  console.log('nenhum valor ímpar encontrado');
}else{
  console.log(odd);
}

//7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let minNumber = 1000;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < minNumber) {
    minNumber = numbers[index];
  }
}

console.log(minNumber);

//8 - Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado.

let numero = [];

for (let index = 1; index <= 25; index += 1) {
  numero.push(index);
}

console.log(numero);

//9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (let index = 1; index <numero.length; index += 1) {
  console.log(numero[index] / 2);
}
