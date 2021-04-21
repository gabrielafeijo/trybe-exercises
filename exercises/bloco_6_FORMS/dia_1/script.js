const estados = ['', 'Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espirito Santo','Goiás','Maranhão','Mato Grosso do Sul','Mato Grosso','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']; 
const getSelect = document.getElementById('estado');

function getState () {
  for (let index in estados) {
    const createOption = document.createElement('option');
    getSelect.appendChild(createOption);
    createOption.innerHTML = estados[index];
  }
}
getState();

/* function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const dataUser = document.querySelector('.form-data');
    if (checkEmail() && checkData()) {
      const div = document.createElement('div');
      div.className = 'div-curriculum';
      div.innerHTML = userInput;
      dataUser.appendChild(div);
    }
  }
}
 */