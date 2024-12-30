

//! without using recursions
function findSubarrays(nums){
    let result = []
    for(let i=0; i<nums.length; i++){
        let temp = []
        for(let j=i; j<nums.length; j++){
            temp.push(nums[j])
            result.push([...temp])
        }
    }
    return result
}

console.log(findSubarrays([1,2,3]));