let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf('Portfólio');
menu.push('Contato');
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

console.log(indexOfPortfolio);
console.log(menuServices);
console.log(menu.length);
console.log(menu);

for (let index=0; index < groceryList.length; index +=1){
  console.log(groceryList[index]);
}

console.log(names);
for (let listaNomes of names){
  console.log(listaNomes)
}