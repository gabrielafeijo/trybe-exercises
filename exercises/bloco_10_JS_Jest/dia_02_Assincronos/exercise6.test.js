const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const specificAnimal = Animals.find((animal) => animal.name === name);
      if (specificAnimal) {
        return resolve(specificAnimal);
      };
      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);
console.log(findAnimalByName('Soneca'))

const getAnimal = (name) => (
  findAnimalByName(name).then(list => list)
);
console.log(getAnimal('Soneca'))
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

// ---------------------

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAges = Animals.filter((animal) => animal.age === age);
      if (arrayAges.length !== 0) {
        return resolve(arrayAges);
      };
      return reject('Nenhum animal com essa idade!');
    }, 100);
  })
);
console.log(findAnimalByAge(5))

const getAge = (age) => (
  findAnimalByAge(age).then(list => list)
);
console.log(getAge(5))


// ---------------------

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAge(1).then(animal => {
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAge(7).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});