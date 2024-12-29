// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Input: [-2,1, -3,4, -1, 2, 1, -5,4]  - - - - - >>>>>Output: 6,   [4, -1,2,1]
// Input: [5,4, -1,7,8]    - - - - ->>>>>   Output: 23, [5,4, -1,7,8]

// Brute Force
{
// function largestSumSubArray(nums){
    // [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//     let maxSum = nums[0]
//     let start, end;
//     for (let i=0; i<nums.length; i++){
//         let sum = 0
//         for (let j=i; j<nums.length; j++){
//             sum+=nums[j]
//             if (sum>maxSum){
//                 maxSum = sum
//                 start = i
//                 end = j
//             }
//         }
//     }
//     return {maxSum, start, end, "arr": nums.slice(start, end+1)}
// }
// console.log(largestSumSubArray([-2,1, 3,4, -1, 2, 1, -5,4]));
}

// kadane's Algorithm :- it says if the sum of  subarray is less than 0 or less than its next number 
// the current sum is 0 or the next number in the array respectively. 
// it says no need to carry extra baggage if the sum is less than 0 or its next number in array

function maxSubArray (nums){
    let maxSum = nums[0]
    let currSum = nums[0]
    let start, end;
    for (let i=1; i<nums.length; i++){
        if(currSum == nums[i-1]){
            start = i-1
        }
        if (currSum+nums[i] > nums[i]){
            currSum += nums[i]
        }
        else
            currSum = nums[i]
        
        // comparing maxSum
        if (currSum > maxSum){
            maxSum = currSum
            end = i
        }
    }
    return {maxSum, start, end, "arr": nums.slice(start, end+1)}
}
console.log(maxSubArray([-2,1, -3,4, -1, 2, 1, -5,4]));