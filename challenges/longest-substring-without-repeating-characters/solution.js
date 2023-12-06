/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const chars = s.split("");
  let output = [chars[0]];
  let size = 0;

  if (chars.length === 1) {
    return 1;
  }
  for (let i = 0; i < chars.length; i++) {
    output = [chars[i]];
    for (let j = i + 1; j < chars.length; j++) {
      if (output.indexOf(chars[j]) < 0) {
        output.push(chars[j]);
        if (output.length > size) {
          size = output.length;
        }
      } else {
        if (output.length > size) {
          size = output.length;
        }
        output = [];
      }
    }
  }
  return size;
};

module.exports = lengthOfLongestSubstring;
