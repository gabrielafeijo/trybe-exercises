const { encode, decode } = require('./encode_decode')

describe('encode', () => {
  it ('checks if encode and decode are functions', () => {
    expect.assertions(1)
    expect(typeof encode).toBe('function');
  });
  it ('checks if encode changes vowels to numbers', () => {
    expect.assertions(1)
    expect(encode('baeiouc')).toEqual('b12345c');
  });
  it ('checks if parameter has the same length as the result', () => {
    expect.assertions(1)
    expect(encode('baeiouc')).toHaveLength(7);
  });
});

describe('decode', () => {
  it ('checks if encode and decode are functions', () => {
    expect.assertions(1)
    expect(typeof decode).toEqual('function');
  });
  it ('checks if encode changes vowels to numbers', () => {
    expect.assertions(1)
    expect(decode('b12345c')).toEqual('baeiouc');
  });
  it ('checks if parameter has the same length as the result', () => {
    expect.assertions(1)
    expect(encode('b12345c')).toHaveLength(7);
  });
});
/* Teste se encode e decode são funções;
Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
Teste se as demais letras/números não são convertidos para cada caso;
Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro. */