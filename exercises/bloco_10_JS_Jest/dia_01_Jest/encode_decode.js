function encode(string) {
  const substitute = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  const words = string.split('').map((key) => {
    if (substitute[key]) {
      return substitute[key];
    }
    return key;
  });
  return words.join('')
};
console.log(encode('aeiou'))

function decode(stringN) {
  const substituteInverted = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  const numbers = stringN.split('').map((num) => {
    if (substituteInverted[num]) {
      return substituteInverted[num];
    }
    return num;
  });
  return numbers.join('');
}
console.log(decode('12345'))

module.exports = {
  encode,
  decode,
}