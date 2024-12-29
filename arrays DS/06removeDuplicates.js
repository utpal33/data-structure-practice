// remove duplicates from sorted array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once. The relative order of the elements should be kept
// the same. Then return the number of unique elements in nums.


let arr = [1,1,1,2,2,2,3,3,4,4,5,5,6]   //sorted array

// using JS methods
{
// function removeDuplicates(arr){
    
//     for (let i=0; i<arr.length;i++){
//         if (arr[i] == arr[i+1]){
//             arr.splice(i+1, 1)
//             i--
//         }
//     }
//     return arr.length
// }
}
console.log(removeDuplicates(arr))

//without inbuilt methods
function removeDuplicates(arr){
    let i = 0
    for (let j=i+1; j<arr.length; j++){
        if (arr[i] != arr[j]){
            arr[i+1] = arr[j]
            i++
            // console.log(arr);
        }
    }
    return i+1
}
