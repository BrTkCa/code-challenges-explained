# LeetCode Challenge

## Challenge Name

https://leetcode.com/problems/two-sum/

### Problem Statement

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Input & Output

#### Example 1:

**Input**: nums = [2,7,11,15], target = 9 </br>
**Output**: [0,1] </br>
**Explanation**: Because nums[0] + nums[1] == 9, we return [0, 1].

#### Example 2:

Input: nums = [3,2,4], target = 6 </br>
Output: [1,2] </br>

#### Example 3:

Input: nums = [3,3], target = 6 </br>
Output: [0,1] </br>

### Solution Explanation

#### Function Definition:

`twoSum(nums, target)`: The function takes two parameters. `nums` is an array of integers, and target is the integer sum that you want to find.

_Outer Loop:_ </br>
The function starts with an outer loop that iterates through each element in the nums array. This loop starts from the first element `(i = 0)` and goes until the second-to-last element.

_Inner Loop:_ </br>
For each iteration of the outer loop, there's an inner loop. This loop starts from the element right after the current element of the outer loop `(j = i + 1)` and goes until the last element of the array.
The purpose of this loop is to check each possible pair of numbers in the array without repeating any combinations.

_Checking the Sum:_ </br>
Inside the inner loop, the function checks if the sum of the two current elements `(nums[i] and nums[j])` equals the target sum.
If a pair is found where `nums[i] + nums[j] == target`, the function immediately returns the indices `[i, j]`.

_Returning the Result:_ </br>
If the loops complete and no such pair is found, the function will implicitly return undefined as it doesn't have a return statement outside the loops. In the context of this problem, it's usually expected that there will always be a solution, so this scenario might not need explicit handling.

_Example Run:_ </br>
Suppose `nums = [2, 7, 11, 15]` and `target = 9`.
The function starts with `i = 0 (num = 2)`. Then it enters the inner loop.
First, it checks `nums[0] + nums[1] → 2 + 7`. This equals `9`, which is our target. So, it returns `[0, 1]`.

### Code

```javascript
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
```

### Time and Space Complexity

#### Time Complexity

The function consists of two nested loops. The outer loop runs through each element of the nums array once.
The inner loop runs through the remaining elements after the current element of the outer loop.
In the worst case, for each element in the array, the inner loop performs `n - 1` comparisons (where n is the length of the nums array), then `n - 2`, and so on, down to `1`.
This results in a total of approximately `n * (n - 1) / 2` operations, which simplifies to `O(n^2)` time complexity. This is because the series `1 + 2 + 3 + ... + (n - 1)` sums to `n * (n - 1) / 2`.

#### Space Complexity

The space complexity of the function is `O(1)`, meaning it's constant.
This is because the space used by the function does not scale with the size of the input array. The only additional memory used is for a few variables (`i`, `j`, and sometimes the return array `[i, j]`), which is independent of the size of the input array.
