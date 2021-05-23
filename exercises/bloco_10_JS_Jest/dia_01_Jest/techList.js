function techList(techNames, name) {
  if (techNames.length === 0) {
    return 'Vazio!';
  }
  const techs = techNames.sort().map((tech) => ({ tech, name }));
    return techs;
  }
console.log(techList(['js', 'html', 'css'], 'gabriela'));
  module.exports = { techList }