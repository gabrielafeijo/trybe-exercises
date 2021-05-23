const myFizzBuzz = require('./exercise4');

describe('myFizzBuzz', () => {
  it ('checks if num is divisible by 3 and 5 and returns the expected result', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it ('checks if num is divisible by 3 and returns the expected result', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it ('checks if num is divisible by 5 and returns the expected result', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });
  it ('checks if num is NOT divisible by 3 and 5 and returns the expected result', () => {
    expect(myFizzBuzz(31)).toBe(31);
  });
  it ('checks if num is NOT a number and returns the expected result', () => {
    expect(myFizzBuzz('31')).toBeFalsy();
  });
})

/* Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */
