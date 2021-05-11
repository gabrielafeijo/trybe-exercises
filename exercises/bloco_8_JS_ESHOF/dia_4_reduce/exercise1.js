//Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const flatten = () => arrays.reduce((acc, currentValue) => acc.concat(currentValue), []);
console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);