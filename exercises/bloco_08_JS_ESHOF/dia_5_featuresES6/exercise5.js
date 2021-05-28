//Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados.
const assert = require('assert');

const myList = [1, 2, 3];

const swap = () => [myList[0], myList[1], myList[2]] = [myList[2], myList[1], myList[0]];

const swappedList = swap(myList);
console.log(swappedList)

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);