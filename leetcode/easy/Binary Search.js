// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.
// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let lowValue = 0;
    let highValue = nums.length - 1;
    let midValue;
    let guessValue;
    while (lowValue <= highValue) { //пока поиск не сократится до одного элемента
        midValue = Math.floor((lowValue + highValue) / 2); //находим средний элемент
        guessValue = nums[midValue];
        if (guessValue === target) {
            return midValue;
        }
        if (guessValue > target) {
            highValue = midValue - 1;
        }
        else {
            lowValue = midValue + 1;
        }
    }
    return -1;
}