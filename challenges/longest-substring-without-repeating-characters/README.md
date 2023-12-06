# LeetCode Challenge

## Challenge Name

https://leetcode.com/problems/longest-substring-without-repeating-characters/

### Problem Statement

Given a string s, find the length of the longest substring without repeating characters.

### Input & Output

#### Example 1

> **Input:** s = "abcabcbb" </br> **Output:** 3 </br> **Explanation:** The answer is "abc", with the length of 3. </br>

#### Example 2

> **Input:** s = "bbbbb" </br> **Output:** 1 </br> **Explanation:** The answer is "b", with the length of 1. </br>

#### Example 3

> **Input:** s = "pwwkew" </br> **Output:** 3 </br> **Explanation:** The answer is "wke", with the length of 3.
> Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

### Solution Explanation

**Function Definition**:  
`lengthOfLongestSubstring(s)`: The function takes one parameter, `s`, which is a string. The goal is to find the length of the longest substring within `s` that does not contain any repeating characters.

**Special Case Check**:  
If the length of the string `s` is 1, the function returns 1, as a single character does not have any repeats.

**Initialization**:  
The function starts by converting the string `s` into an array of characters, `chars`. It also initializes `output`, a temporary array to store the current substring being checked, and `size`, a variable to keep track of the length of the longest substring found so far.

**Outer Loop**:  
This loop iterates through each character in the `chars` array. For each iteration, it resets `output` to start with the current character.

**Inner Loop**:  
For each character selected by the outer loop, the inner loop starts from the next character and checks each subsequent character. It ensures that there are no repeating characters in the `output` array.

**Checking for Repeats and Updating Length**:  
If a character is not in `output`, it's added to `output`, and the length of `output` is compared with `size`. If `output.length` is greater, `size` is updated. If a character repeats, the inner loop breaks, and the process continues with the next character from the outer loop.

**Returning the Result**:  
After all iterations, the function returns `size`, the length of the longest substring without repeating characters found in the input string `s`.

**Example Run**:  
Suppose `s = "abcabcbb"`.

- The function initializes with `chars = ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b']`.
- The outer loop starts with `i = 0 (char = 'a')`.
- The inner loop adds 'a', then 'b', then 'c' to `output`. On reaching the next 'a', it breaks.
- The process repeats for each character. The longest non-repeating substring found is "abc", with a length of 3. Thus, it returns `3`.

### Code

```javascript
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
```

### Time and Space Complexity

#### Time Complexity

Outer Loop: This loop runs for each character in the string s, making the complexity O(n), where n is the length of the string.
Inner Loop: Inside the outer loop, the inner loop also potentially runs for each remaining character in the string. In the worst-case scenario (when all characters are unique), this also contributes to O(n).
Checking for Repeats: The method indexOf used inside the inner loop to check for repeats has a complexity of O(k) for each check, where k is the length of the output array. In the worst case, k can be O(n). This makes the worst-case time complexity of the inner loop O(n²).
So, the overall worst-case time complexity of the function is O(n²).

#### Space Complexity

Additional Space Used: The function uses an additional array output to store the current substring. In the worst case, this array can grow to the size of the entire string, making its space complexity O(n).
Input and Output: The input (s) and the return value (size) do not count towards additional space complexity as they are part of the function's input and output.
