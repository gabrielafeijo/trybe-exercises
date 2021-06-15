// Array
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf('Portfólio');
menu.push('Contato');

console.log(menuServices);
console.log(indexOfPortfolio);
console.log(menu.length);
console.log(menu);

// For
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (index = 0; index <groceryList.length; index+=1) {
  console.log(groceryList[index]);
}

// For of
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
  console.log(name)
}


let fruits = [ 'pear', 'apple']
fruits.unshift('strawberry'); // quase o push, mas adiciona ao início
fruits.pop(); // deleta o último elemento
console.log(fruits);

let fruits = [ 'pear', 'apple', 'banana']
fruits.push('pineapple')
fruits.shift(); // deleta o primeiro elemento
console.log(fruits);

let fruits = [ 'pear', 'apple', 'banana']
fruits.splice(0, 2); // from index 0 remove 2 elements
console.log(fruits);

let fruits = [ 'pear', 'apple', 'banana']
fruits.splice(0, 2, 'strawberry', 'pineapple', 'cherry'); // from index 0 remove 2 elements e acrescenta strawberry e outros ao início
console.log(fruits); // [ 'strawberry', 'pineapple', 'cherry', 'banana' ]

let fruits = [ 'pear', 'apple', 'banana']
fruits.splice(2, 0, 'strawberry', 'pineapple', 'cherry'); // from index 0 remove 2 elements e acrescenta strawberry e outros ao início
console.log(fruits); // [ 'pear', 'apple', 'strawberry', 'pineapple', 'cherry', 'banana' ]

let string = 'teste'
let strArray = ['t', 'e', 's', 'v', 'i']
string = string.slice(1, 3) //start and end - começa na posição 1 e termina na 3
strArray = strArray.slice(1, 3) //start and end
console.log(string);
console.log(strArray);

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

const newArray = array1.concat(array2);

console.log(newArray);