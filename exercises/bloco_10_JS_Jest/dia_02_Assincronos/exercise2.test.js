const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  console.log(users['4'].name)
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

describe('Quando o usuário é encontrado', () => {
  it('Retorne o resultado da função getUserName', () => {
    expect.assertions(1);
    return getUserName(4).then(user => {
      expect(user).toBe('Mark');
    });
  });
});

describe('Quando o usuário NÃO é encontrado', () => {
  it('Retorne o resultado da função getUserName', () => {
    expect.assertions(1);
    return getUserName(2).catch(error => {
      expect(error).toEqual({ error: 'User with 2 not found.' });
    });
  });
});

/* Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem. */