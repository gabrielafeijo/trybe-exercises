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
  const setNewColor = 'red';
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

/* Exercício 4:

Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/