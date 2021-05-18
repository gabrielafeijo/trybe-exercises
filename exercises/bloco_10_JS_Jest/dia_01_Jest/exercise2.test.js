const myRemove = require('./exercise2');

describe('myRemove', () => {
  it('check if myRemove([1, 2, 3, 4], 3) returns the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });
  it("check if myRemove([1, 2, 3, 4], 3) doesn't return the array [1, 2, 3, 4]", () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
  });
  it("check if myRemove([1, 2, 3, 4], 3) doesn't change", () => {
    const myList = [1, 2, 3, 4];
    myRemove(myList, 3);
    expect(myList).toEqual([1, 2, 3, 4]);
  });
  it('check if myRemove([1, 2, 3, 4], 5) return the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });
});
