const lengthOfLongestSubstring = require("./solution");
const assert = require("assert").strict;
const test = require("node:test");

// Test cases
test("lengthOfLongestSubstring finds the longest substring without repeating characters", () => {
  assert.strictEqual(
    lengthOfLongestSubstring("abcabcbb"),
    3,
    "Test Case 1 Failed"
  );
  assert.strictEqual(
    lengthOfLongestSubstring("bbbbb"),
    1,
    "Test Case 2 Failed"
  );
  assert.strictEqual(
    lengthOfLongestSubstring("pwwkew"),
    3,
    "Test Case 3 Failed"
  );
  assert.strictEqual(lengthOfLongestSubstring(""), 0, "Test Case 4 Failed");
  assert.strictEqual(lengthOfLongestSubstring(" "), 1, "Test Case 5 Failed");
  assert.strictEqual(lengthOfLongestSubstring("au"), 2, "Test Case 6 Failed");
  assert.strictEqual(lengthOfLongestSubstring("dvdf"), 3, "Test Case 7 Failed");
});
