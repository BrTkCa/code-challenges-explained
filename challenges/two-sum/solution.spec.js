const twoSum = require("./solution");
const assert = require("assert").strict;
const test = require("node:test");

// Test cases
test("twoSum finds indices that sum up to target", () => {
  assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
  assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
});
