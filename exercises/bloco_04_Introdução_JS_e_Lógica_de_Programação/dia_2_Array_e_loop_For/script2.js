//1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index=0; index <numbers.length; index+=1) {
  console.log (numbers[index]);
}

for (let indice of numbers) {
  console.log (indice);
}

//a. Define a variável numbers em um array;
//b. Insere o for;
//c. Insere a variável contadora index; 
//d. Informa a posição inicial (0);
//e. Informa o percurso - a partir do contador (0 - posição inicial) passando por todo o array (numbers.lenght) - isto é, uma condição!;
//f. Incrementa o contador (index) em uma posição (+=1);
//g. Imprime (console.log) toda a variável numbers (numbers[index]);

//a. Define a variável numbers em um array;
//b. Insere o for of (let variável/contador (indice) of array (numbers));
//c. Imprime (console.log) toda a variável (indice).

// Eu resolvi o problema? Sim. Havia outras maneiras de resolver o problema? Sim. A maneira que eu escolhi foi a mais eficiente possível? Não, o for of era mais eficiente. Seria possível inverter ou retirar algum passo? Acredito que não. Se eu fosse um computador, conseguiria entender todas as intruções? Sim!

//2 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let indice of numbers) {
  sum += indice;
}
console.log(sum);

for (let indice in numbers) {
  sum += numbers[indice];
}
console.log(sum);


for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index]
}
console.log (sum);


//a. Definir variável soma;
//b. Insere a função for;
//c. Insere a variável contadora (indice); 
//d. Informa a posição inicial (0);
//e. Informa o percurso - a partir do contador (0 - posição inicial) passando por todo o array (numbers.lenght) - isto é, uma condição!;
//f. Incrementa o contador (index) em uma posição (+=1);
//g. Atualiza o valor da variável soma (sum += numbers[indice] --> sum = sum + numbers[indice]);
//h. Imprime a soma;

//a. Definir variável soma;
//b. Insere a função for of e/ou in (let variável (indice) of array (numbers));
//c. Imprime (console.log) toda a variável (indice).

// Eu resolvi o problema? Sim. Havia outras maneiras de resolver o problema? Sim. A maneira que eu escolhi foi a mais eficiente possível? Não, o for of era mais eficiente. Seria possível inverter ou retirar algum passo? Acredito que não. Se eu fosse um computador, conseguiria entender todas as intruções? Sim!

//3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let indice of numbers) {
  sum += indice;
}
console.log(sum);

let media = sum/ numbers.length;

console.log(media);
//1. busca a sum (todos os passos anteriores)
//2. Aplica a média (sum/ numbers.length)

//4 - Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media>20) {
  console.log ('valor maior que 20')
}else{
  console.log ('valor menor ou igual a 20')
}
media>20 ?  console.log ('valor maior que 20') : console.log ('valor menor ou igual a 20')
//1. inclui o código anterior
//2. condiciona a regra media>20
//3. imprime o solicitado
//4. faz tudo em um ternário

//5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = 0;

/* //primeiro itera os elementos, depois ordena e seleciona o último
for (let index=0; index<numbers.length; index += 1){ 
  numbers.sort((a, b) => a - b)
  higherNumber = numbers[numbers.length -1];
}
console.log(numbers)
console.log(higherNumber) */

/* for (let index=0; index<numbers.length; index += 1){ // o slice nethod retorna o último elemento dentro do array
  numbers.sort((a, b) => a - b)
  higherNumber = numbers.slice(-1);
}
console.log(numbers)
console.log(higherNumber) */

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) { // usa condicional para verificar qual é o maior número, iterando todos os números até achar o número que é igual ao higherNumber
    higherNumber = numbers[index];
  }
}
console.log(higherNumber);

//6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0; // caso queira colocar os números aqui deveria ser um array vazio
for (let index = 0; index < numbers.length; index += 1) { //itera todo o array
  if (numbers[index] % 2 !== 0) { //seleciona os ímares
    odd += 1; //acrescenta um a contagem - caso queira incluir o console aqui, a contagem será feita um de cada vez / caso queira montar o array com os números odd += numbers[index] + ' ';
  }
}
if (odd === 0) { // caso não encontre números ímapares(0), retornará a msg abaixo
  console.log("nenhum valor ímpar encontrado")
}else{ // caso encontre, retornará a quantidade encontrada(nesse caso 6)
  console.log(odd)
}

//7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* let minNumber = 1000; // acrescenta um valor maior fora do array */
let minNumber = numbers[0]; // armazena a primeira posição
let minNumber2 = 0;

for(let index = 0; index < numbers.length; index += 1) {
  if(numbers[index]< minNumber) { // condiciona a iteração buscando o menor valor
    minNumber = numbers[index]; // como possui a posição inicial, já busca o menor valor
  }
}
console.log(minNumber);

for (let index = 0; index < numbers.length; index += 1) {
  numbers.sort((a,b) => a - b); // ordena e busca a primeira posição
  minNumber2 = numbers[0]
}
console.log(minNumber2);


//8 - Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado.

let numero = []; // cria um array vazio

for (let index = 1; index <= 25; index += 1) { // itera do 1 até o número 25
  numero.push(index); // empurra os números iterados dentro do array vazio
}

console.log(numero); // imprime o array atualizado

//9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (let index = 1; index <numero.length; index += 1) {
  console.log(numero[index] / 2); // divide todos os números do array por 2
}


//Bônus

//Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; // o sort é muito mais eficiente nesse caso
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

// Ordene o array numbers em ordem decrescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) { // para invertar o numbes[index] passa a ser maior que o second[index]
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

//Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; // Gabarito
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);
  
