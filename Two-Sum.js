// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Solution:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 
var nums = [3,2,4];
var target = 6;


 var twoSum = function(nums, target) {
  const result = [];
  for(let i=0;i<nums.length;i++){
      if(nums.indexOf(target-nums[i]) !== -1 && nums.indexOf(target-nums[i]) !== i){
          result.push(i);
          result.push(nums.indexOf(target-nums[i]));
          break;
      }
  }
  return result;
};

console.log(twoSum(nums,target));

