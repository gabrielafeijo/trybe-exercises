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

describe('Quando o usuário é encontrado', () => {
  it('Retorne o resultado da função getUserName', async () => {
    expect.assertions(1);
    const getUser = await getUserName(4);
      expect(getUser).toBe('Mark');
    });
});

describe('Quando o usuário NÃO é encontrado', () => {
  it('Retorne o resultado da função getUserName', async () => {
    try {
      expect.assertions(1);
      await getUserName(2)
    } catch (error) {
      expect(error).toEqual({ error: 'User with 2 not found.' });
    };
  });
});
