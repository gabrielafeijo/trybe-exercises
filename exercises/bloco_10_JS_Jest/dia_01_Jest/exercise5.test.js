const { obj1, obj2, obj3 } = require('./exercise5');

describe('obj', () => {
  it ('checks if objects are identicals', () => {
    expect(obj1).toEqual(obj2);
  });
  it("checks if objects are NOT identicals", () => {
    expect(obj2).not.toEqual(obj3);
  });
  it("checks if objects are NOT identicals", () => {
    expect(obj1).not.toEqual(obj3);
  });
});
