//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

let n =5;
let symbol = '*';
let square = '';

for (index=0; index<n; index+=1){ // triangulo retângulo
  square = square + symbol;
}
for (index=0; index<n; index+=1){ // colunas
  console.log(square)
}
   
// Imprimir um quadrado de * (linhas (5) e colunas(5));
// 1. Definir valor da variável n (linhas);
// 2. Inserir o loop (for) que define as linhas;
  // 2.1. Definir a variável square um uma string vazia para poder realizar a concatenação posteriormente;
  // 2.2. Definir a variável symbol para especificar o símbolo *;
  // 2.3. Concatenar as strings para gerar as colunas (square + symbol) - tb funciona square += symbol;
//3. Repetir o loop para imprimir as colunas (string square);
//4. Imprimir quadrado de quadrado de astericos com 5 linhas e 5 colunas.


//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let m = 5;
let symbol = '*';
let triangle = '';

for (i=0; i <= m; i +=1) {
  console.log(triangle);
  triangle = triangle + symbol;
}

// Imprimir um triângulo retângulo com base de 5 (*) (linhas (5) e colunas(5) - incrementando o elemento);
// 1. Definir valor da variável n (linhas);
// 2. Inserir o loop (for) que define as linhas - sendo i<=m (0 a 5);
  // 2.1. Definir a variável triangle um uma string vazia para poder realizar a concatenação posteriormente;
  // 2.2. Definir a variável symbol para especificar o símbolo *;
//3. Imprimir triangle de astericos com linhas incrementais de elementos de 1 à 5;
//4. Concatenar as strings para gerar as colunas (triangle + symbol) - tb funciona triangle += symbol;


//3- Agora inverta o lado do triângulo.
//Gabarito

let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};


//4- Depois, faça uma pirâmide com n asteriscos de base:
//Gabarito

let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};

//Bonus - 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar: - Gabarito 
let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}

// Bonus - 6- Faça um programa que diz se um número definido numa variável é primo ou não. (Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero. Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar). - Gabarito

let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');