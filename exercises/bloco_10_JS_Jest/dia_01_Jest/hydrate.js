function hydrate(string) {
  return string.split(' ').map(Number).filter(Number).reduce((acc, curr) => acc + curr , 0) === 1 ? `1 copo de água` : `${string.split(' ').map(Number).filter(Number).reduce((acc, curr) =>  acc + curr, 0)} copos de água`;
}

console.log(hydrate('1 cerveja'))

module.exports = { hydrate };

/* 
it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
  expect(hydrate('1 cerveja')).toBe('1 copo de água');
  expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
  expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
  expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
  expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água'); */