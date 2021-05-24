const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

// Crie uma função que adicione a classe 'tech' ao elemento selecionado;
function swapTheFirst(e) {
  document.getElementsByClassName('tech')[0].innerText = e.target.value;
}

// 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso? Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
function selectThis(e) {
  document.getElementsByClassName('tech')[0].classList.remove('tech');
  e.target.classList.add('tech');
}

//  Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
function redirect() {
  window.location.replace('https://google.com');
}

//Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
function changeColor(e) {
  e.target.style.color = '#006dfb';
}

divUm.addEventListener('click', selectThis);
divDois.addEventListener('click', selectThis);
divTres.addEventListener('click', selectThis);

input.addEventListener('input', swapTheFirst);

myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('dblclick', redirect);

/*
 
Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.