const myRemoveWithoutCopy = require('./exercise3');

describe('myRemoveWithoutCopy', () => {
  it ('check if myRemoveWithoutCopy([1, 2, 3, 4], 3) returns the expected array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });
  it("check if myRemove([1, 2, 3, 4], 3) doesn't return the array [1, 2, 3, 4]", () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });
  it("check if myRemove([1, 2, 3, 4], 3) doesn't change", () => {
    const myList = [1, 2, 3, 4];
    myRemoveWithoutCopy(myList, 3)
    expect([1, 2, 3, 4]).not.toEqual(myList) // não leu
  });
  it('check if myRemove([1, 2, 3, 4], 5) return the expected array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });
})
/* A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado */