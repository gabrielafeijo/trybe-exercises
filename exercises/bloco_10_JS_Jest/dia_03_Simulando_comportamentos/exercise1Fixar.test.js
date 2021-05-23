const  { somar, subtrair, multiplicar, dividir } = require("./exercise1Fixar");

test("#subtrair", () => {

  subtrair.subtrair = jest.fn();
  subtrair.subtrair();
  expect(subtrair.subtrair).toHaveBeenCalled();
});


test("#multiplicar", () => {

  multiplicar.multiplicar = jest.fn().mockReturnValue(10);

  multiplicar.multiplicar(5, 2);
  expect(multiplicar.multiplicar(5, 2)).toBe(10);
  expect(multiplicar.multiplicar).toHaveBeenCalled();
});

test("#somar", () => {

  somar.somar = jest.fn().mockImplementation((a, b) => a + b);

  somar.somar(5, 1);
  expect(somar.somar(5, 1)).toBe(6);
  expect(somar.somar).toHaveBeenCalledWith(5, 1);
  expect(somar.somar).toHaveBeenCalled();
});


test("#dividir", () => {

  dividir.dividir = jest.fn().mockReturnValue(15);
  
  dividir.dividir (2, 5);
  expect(dividir.dividir).toHaveBeenCalledTimes(1);
  expect(dividir.dividir(2, 5)).toBe(15);
  expect(dividir.dividir).toHaveBeenCalledWith(2, 5);
  expect(dividir.dividir).toHaveBeenCalled();
});

test("#subtrair2", () => {
  subtrair.subtrair = jest.spyOn(subtrair, 'subtrair').mockReturnValue(20);

  subtrair(5, 2);
  expect(subtrair.subtrair(5, 2)).toBe(20);
  expect(subtrair.subtrair).toHaveBeenCalled();
  subtrair.subtrair.mockRestore();
  expect(subtrair(5, 2)).toBe(3);
});

/* Faça o mock da funcão subtrair e teste sua chamada.
Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução. */
