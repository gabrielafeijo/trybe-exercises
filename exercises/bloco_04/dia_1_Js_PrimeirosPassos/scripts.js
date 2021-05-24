//Exercise 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados.
let a = 10;
let b = 2;

let adição = a + b;
let subtração = a - b;
let multiplicação = a * b;
let divisão = a / b;
let módulo = a % b;
console.log(adição);
console.log(subtração);
console.log(multiplicação);
console.log(divisão);
console.log(módulo);
//Exercise 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let num1 = 10;
let num2 = 25;

if(num1> num2) {
  console.log(num1)
} else {
  console.log(num2)
}

//Exercise 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let num1 = 10;
let num2 = 25;
let num3 = 350;

if(num1> num2 && num1>num3) {
  console.log(num1)
} else if (num2> num3 && num2>num1){
  console.log(num2)
} else {
  console.log(num3)
}

// Exercise 4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let number = 34;

if(number > 0) {
  console.log('positive')
} else if (number < 0) {
  console.log('negative')
} else {
  console.log('zero')
}

//Exercise 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

let angulo1 = 45;
let angulo2 = 45;
let angulo3 = 90;
if(angulo1+ angulo2+ angulo3 === 180) {
  console.log(true);
} else {
  console.log('Deu ruim!')
}

//Exercise 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
/* Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
 */

let pecas = 'Cavalo';

switch (pecas.toLowerCase()) {
  case 'queen':
  console.log('do All')
  break;

  case 'bispo':
  console.log('diagonais')
  break;

  case 'cavalo':
  console.log('formato L')
  break;

  default: console.log('acabaram as peças')
}

//Exercise 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
/* 
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */
let porcentagem = 1030;
if (porcentagem> 100 || porcentagem< 0) {
  console.log("Esse número não é válido. PRESTA ATENÇÃO!")
}
else if (porcentagem >= 90) {
 console.log("A");
} else if (porcentagem >= 80) {
  console.log("B");
} else if (porcentagem >= 70) {
  console.log("C");
} else if (porcentagem >= 60) {
  console.log("D");
} else if (porcentagem >= 50) {
  console.log("E");
}  else {
  console.log("F");
}

//Exercise 8 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
let number1 = 3;
let number2 = 6;
let number = 5;
if (number1% 2 === 0 || number2% 2 === 0 || number2% 2 === 0  ) {
  console.log(true);
} else {
  console.log(false);
}

//Exercise 9 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
let number1 = 8;
let number2 = 6;
let number = 2;
if (!(number1% 2 === 0) || !(number2% 2 === 0) || !(number2% 2 === 0)  ) {
  console.log(true);
} else {
  console.log(false);
}

//Exercise 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
/* Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
lucro = valorVenda - valorCustoTotal (lucro de um produto) */

let custoProduto = 100;
let valorVenda = 140;

if (custoProduto < 0 || valorVenda < 0) {
  console.log("Valor não válido");
} else {
  custoProduto = (custoProduto * 1.2)
  console.log(1000 * (valorVenda - custoProduto))
}

// Exercise 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
/* A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
Resultado: R$ 2.612,55.*/

 let salario = 3000;
 let inss;
 let ir;
 
 if (salario <= 1556.94) {
   inss = (salario * 0.08);
  } else if(salario >= 1556.95 && salario <= 2594.92) {
  inss = (salario * 0.09);
 } else if(salario >= 2594.93  && salario <= 5189.82) {
  inss = (salario * 0.11);
 } else {
  inss = 570.88;
 }

 let salrioSemINSS = salario - inss;
 console.log(salrioSemINSS)
 
 if(salrioSemINSS <= 1903.98) {
  ir = 0 ;
} else if (salrioSemINSS > 1903.99 && salrioSemINSS <= 2826.65) {
  ir = ((salrioSemINSS * 0.075) - 142.8);
 } else if(salrioSemINSS > 2826.66 && salrioSemINSS <= 3751.05) {
  ir = ((salrioSemINSS * 0.15) - 354.8);
} else if(salrioSemINSS > 3751.06  && salrioSemINSS <= 4664.68) {
  ir = ((salrioSemINSS * 0.225) - 636.13);
} else {
  ir = ((salrioSemINSS * 0.275) - 869.36);
};

let salarioLiquido = (salrioSemINSS - ir)
console.log(salarioLiquido);

