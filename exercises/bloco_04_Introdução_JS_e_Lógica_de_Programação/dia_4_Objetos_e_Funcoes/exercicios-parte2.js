//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.Exemplo de palíndromo: arara . verificaPalindrome('arara') ;Retorno esperado: true verificaPalindrome('desenvolvimento') ; Retorno esperado: false // Solução --> https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/#:~:text=function%20palindrome(str)%20%7B%20var%20re%20%3D%20%2F%5B%5EA,if%20(str%5Bi%5D%20!%3D%3D

function verificaPalindrome(isPalindrome) {
  for(index in isPalindrome) {
    if(isPalindrome[index] != isPalindrome[(isPalindrome.length - 1) - index]){
      return false;
    }
  }
  return true;
}

function verificaPalindrome(string) { 
  let reverse = string.split('').reverse().join(''); // quebrou a string(split), inverteu (reverse) e juntou (join)
  if (reverse === string) { // compara reverse à string
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('arara'))
console.log(verificaPalindrome('desenvolvimento'))

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

const array = [2, 3, 6, 7, 10, 1]; 

function numbersArray(array) {
  let maxNumberIndex = 0;
  for (let index in array) {
    if (array[maxNumberIndex] < array[index]) {
      maxNumberIndex = index;  
    }
}
return maxNumberIndex;
}
console.log(numbersArray(array))

//3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

const numbers = [2, 4, 6, 7, 10, 0, -3];

function lowestIndex(array) {
  let maxNumberIndex = 0;
  for (let index in array) {
    if (numbers[maxNumberIndex] > numbers[index]) {
      maxNumberIndex = index;  
    }
}
return maxNumberIndex;
}
console.log(lowestIndex(numbers))

//4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

const nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

function checkSizeOfNames (nomes){
  let biggestName = nomes[0];
  for (let index in nomes) {
    if (nomes[index].length> biggestName.length) {
      biggestName = nomes[index];
    
    }
  }
  return biggestName
}
console.log(checkSizeOfNames(nomes))

//5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

//Duas formas de resolver o exercício - Gabarito
function maisRepetido(numeros) { // forma menor
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1; // incrementa
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

function maisRepetido(numeros) {
  let num = {};

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }

  return contNumero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2

// 6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function checkSum (n) {
  let sum = 0;  
  for (let index = 1; index <= n; index +=1) {
    sum += index;
  }
  return sum;
}
console.log(checkSum(5));

// 7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

//Duas formas de resolver o exercício - Gabarito
function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;

  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  
  return result;
}

console.log(verificaFimPalavra('trybe', 'be')); //true
console.log(verificaFimPalavra('joaofernando', 'fernan')); //false