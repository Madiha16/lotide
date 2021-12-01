// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it(`returns [] for one element ["Labs"]`, () => {
    assert.deepEqual(tail(["Labs"]), []);
  });
  it("returns [] for an empty array []", () => {
    assert.deepEqual(tail([]), []);
  });
  it(`returns [2, 3], the tail of an array (not the first element) for [1 ,2, 3]`, () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it(`returns 0 for an empty array`, () => {
    const result1 = tail([]);
    assert.equal(result1.length, 0);
  });
});