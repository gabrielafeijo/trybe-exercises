const states = document.getElementById('state');
function createStateOptions() {
  const brazilianStates = ['', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index in brazilianStates) {
    const createStates = document.createElement('option');
    states.appendChild(createStates)
    createStates.innerHTML = brazilianStates[index];
  }
}
createStateOptions();
