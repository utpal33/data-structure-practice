// peak element   ------>>>>> a number which is greater thatits both neighbours called peak number
// constraints : the array.length >= 3
// write a function which takes two parameter nums an array and n length of nums

function isPeakNumber(nums, n){
    // constraints check
    if (n === 0){
        return -1
    }
    if (n === 1){
        return nums[0]
    }
    for (let i=1; i<n-1; i++){
        
        if (nums[i]>nums[i+1] && nums[i]>nums[i-1]){
            return nums[i]
        }
    }
    return -1
}

console.log(isPeakNumber([1, 3, 20, 4, 1, 0], 6));
