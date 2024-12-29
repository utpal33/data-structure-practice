//  second largest number in an array
// brute force approach :-  dont think of optimisation just do it how ever it is done.


// using inbuilt methods
{
// function secondlargest(arr){
//     console.log(arr);
//     if (arr.length<=1){
//         return -1
//     }else{
//         let sortedSet = Array.from(new Set(arr))   // to create a new set it Set() takes O(n) time complexity
//         sortedSet.sort((a,b)=>a-b)  //sort method has time complexity of O(nlogn)
//         return sortedSet[sortedSet.length-2]
//     }
// }
}


// without any inbuilt method  { O(n) } where n is length of arr
function secondlargest(arr){
    let max = 0
    let secondMax = 0
    for (let i of arr){
        if (i>max){
            secondMax = max
            max=i
        }
        else if (i>secondMax){
            secondMax = i
        }
    }
    return secondMax
}
console.log(secondlargest([4,2,3,8,87,7,1,10,10]))