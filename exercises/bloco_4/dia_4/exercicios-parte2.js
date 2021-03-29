//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.Exemplo de palíndromo: arara . verificaPalindrome('arara') ;Retorno esperado: true verificaPalindrome('desenvolvimento') ; Retorno esperado: false
let isPalindrome = true;
let word = '';

function verificaPalindrome() {
   for(i=0; i < word; i+=1) {
     word=n.length;
    if(word[i] !== word.length){
      return false;
    }
    word-=1;
  }
  return true;
 }
 

console.log(verificaPalindrome('arara'))
console.log(verificaPalindrome('desenvolvimento'))