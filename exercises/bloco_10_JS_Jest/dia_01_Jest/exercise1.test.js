const sum = require('./exercise1');

describe('sum', () => {
  test('sums two values', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('sums two values', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('testa se a função sum lança um erro', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  test('testa se a frase é "parameters must be numbers"', () => {
    expect(() => { sum(4, '5')}).toThrow(/parameters must be numbers/)
  });
});
