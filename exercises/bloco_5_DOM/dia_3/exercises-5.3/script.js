function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysList () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');
  for (let indice = 0; indice < dezDaysList.length; indice +=1) {
    const dezDays = dezDaysList[indice];
    const dezDaysListItem = document.createElement('li');
    if(dezDays === 24 || dezDays === 31) {
      dezDaysListItem.className = 'day holiday';
      dezDaysListItem.innerHTML = dezDays;
      daysList.appendChild(dezDaysListItem);
    }else if (dezDays === 04 || dezDays === 11 || dezDays === 18){
      dezDaysListItem.className = 'day friday';
      dezDaysListItem.innerHTML = dezDays;
      daysList.appendChild(dezDaysListItem);
    }else if (dezDays === 25) {
      dezDaysListItem.className = 'day holiday friday';
      dezDaysListItem.innerHTML = dezDays;
      daysList.appendChild(dezDaysListItem);
    }else{
      dezDaysListItem.className = 'day';
      dezDaysListItem.innerHTML = dezDays;
      daysList.appendChild(dezDaysListItem);
    }
  }
}

createDaysList();

function newHolidayButton (stringHolidays) {
  const holidaysButtonLocation = document.querySelector('.buttons-container');
  const holidaysButton = document.createElement('button');
  const buttonId = 'btn-holiday';
  
  holidaysButton.id = buttonId;
  holidaysButton.innerHTML = stringHolidays;
  holidaysButtonLocation.appendChild(holidaysButton);
}
newHolidayButton('Feriados');

/* let addColor = document.querySelector('.buttons-container');
addColor.addEventListener('click', addColorToButton);
function addColorToButton () {
  let holidays = document.querySelector('.holiday');
  holidays.style.backgroundColor = 'orange';
  alert('Gabriela, Você Consegue!')
}
addColorToButton();*/

function displayHolidays() {
  const getHolidayButton = document.querySelector('#btn-holiday');
  const getHolidays = document.querySelectorAll('.holiday')
  const backgroundColor = 'rgb(238,238,238)';
  const setNewColor = 'orange';

  getHolidayButton.addEventListener('click', function() {
    for (let index in getHolidays) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();

function createFridayButton (stringFriday) {
  const fridayButtonLocation = document.querySelector('.buttons-container');
  const fridayButton = document.createElement('button');
  const fridayButtonId = 'btn-friday';
  fridayButton.id = fridayButtonId;
  fridayButton.innerHTML = stringFriday;

  fridayButtonLocation.appendChild(fridayButton);
}

createFridayButton('Sexta-feira');

function displayFridays(fridaysArray) {
  const getFridayButton = document.querySelector('#btn-friday');
  const getFridays = document.querySelectorAll('.friday')
  const backgroundColor = 'rgb(238,238,238)';
  const setNewColor = 'salmon';
  const textFriday = "It's Friday, baby!"

  getFridayButton.addEventListener('click', function() {
    for (let index in getFridays) {      
      if (getFridays[index].innerText === textFriday) {
        getFridays[index].innerText = fridaysArray[index];
      } else {
        getFridays[index].innerText = textFriday;
      }
    }
    for (let index in getFridays) {      
      if (getFridays[index].style.backgroundColor === setNewColor) {
        getFridays[index].style.backgroundColor = backgroundColor;
      } else {
        getFridays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);


function aumenta () {
  const aumenta = document.querySelector('#days');
  aumenta.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function retorna () {
  const retorna = document.querySelector('#days');
  retorna.addEventListener('mouseout', function(event){
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};
aumenta();
retorna();

/* 
Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');
/*
Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('purple');

/*Exercício 9:
Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

Exercício 10:
Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
*/