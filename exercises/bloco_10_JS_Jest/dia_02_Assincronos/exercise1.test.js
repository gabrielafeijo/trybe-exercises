const { TestScheduler } = require("@jest/core");

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test ('testando o uppercase', done => {
  uppercase('gabriela', (callback) => {
    expect(callback).toBe('GABRIELA');
    done();
  })
})
