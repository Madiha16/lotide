// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it(`returns [] for ["Labs"]`, () => {
    assert.deepEqual(tail(["Labs"]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});