// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Your goal is to reach the last index in the minimum number of jumps.
// You can assume that you can always reach the last index.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
 let jump = function(nums) {
    let targets = [nums.length - 1];
    
    for (i = nums.length - 2; i >= 0; i--) {
        let reach = nums[i] + i;
        for (j = 0; j < targets.length; j++) {
            if (reach >= targets[j]) {
                targets = targets.slice(0, j+1)
                targets.push(i)
                break
            }
            
            
        }
    }
    return targets.length - 1    
};