/* Parte I - Crie uma constante chamada name e atribua a ela o seu nome (Exemplo: Carolina);
Crie uma constante chamada birthCity e atribua a ela a sua cidade natal;
Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu;
Utilize o console.log() para imprimir as constantes e variáveis que você criou;
Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔 */

const nome = 'Gabriela';
const birthCity = 'São Paulo';
let birthYear = 1987;
console.log(nome, birthCity, birthYear);
birthYear = 2030;
console.log(birthYear);
/* birthCity = 'Sou de lugar nenhum'; */
console.log(birthCity); // Não posso alterar o valor de uma constante!

//Parte II

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId)
console.log(typeof isEnrolled)
console.log(typeof patientInfo)
console.log(typeof patientEmail)

/* Crie uma variável chamada base e uma variável chamada altura e atribua os seus respectivos valores: 5 e 8;
Crie uma variável chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
Crie uma variável chamada perimetro e atribua a ela a soma de todos os lados do retângulo; */

let base = 5;
let height = 8;
let area = base * height;
console.log(area);

let lado = 2;
let perimeter = 4 * lado;
console.log(perimeter);

let idade = 2e-2; //0.02
idade = 2e2; //200
console.log(idade);

let modulo = 23 % 5; // 3 --> me retorna o resto
console.log(modulo);



// Qual o resultado da seguinte expressão?
let total = 10 + 5 * 2 / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
let expressão1 = '5e' / 2;
let expressão2 = '5e' - 2;;
console.log(expressão1, expressão2);


// Somar a string '200' com o número 50 e retornar 250

let number1 = 50;
let number2 = +'200';
let soma = number1 + number2;
console.log(soma);


// Incremente o número 5 e retorne o seu valor incrementado
let increment = 5;
console.log(increment++); //5
console.log(++increment); //7 (pois add mais ao incremento acima sozinho seria 6)

// Como dividir o peso por 2?

let numero = +'64' / 2;
let unidade = 'kg';
let peso = numero + unidade; // '80kg'
console.log(peso)


// parteIV - if/else 

/* Crie uma variável que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
Se a nota for menor que 60, imprima "Você foi reprovada(o)"
Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
 */

let nota = 90;

if (nota >= 80) {
  console.log('Parabéns, você foi aprovada(o)!');
} else if (nota>= 60 && nota <=80) {
  console.log('Você está na nossa lista de espera');
} else {
  console.log('Você foi reprovada(o)')
}

// parteV - switch/case

/* Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' . */

let status = 'lista'; 
switch ( status ) {
  case 'aprovada':
  console.log('uhuuu')
  break;

  case 'lista':
  console.log('quase')
  break;
  
  case 'reprovada':
  console.log('tenta de novo')
  break;

  default :
  console.log('não se aplica')
}

