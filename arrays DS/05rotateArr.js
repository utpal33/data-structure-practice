// Rotate array by k Steps    --> where is k is the index value
// ex :- arr = [1,2,3,4,5,6,7], k = 3    ---> output = [5,6,7,1,2,3,4]
// ex:- if k = 4 --> output = [6,7,1,2,3,4,5] 


let arr = [1,2,3,4,5,6,7]

// using inbuil methods
{
    // function rotateArr(arr, steps){
    //     let newArr = arr.slice(steps+1).concat(arr.slice(0,steps+1))
    //     return newArr
    // }
    // console.log(rotateArr(arr, 3));
}


// without inbuilt methods
function rotateArr(arr, steps){
    if(steps>arr.length){
        steps = steps % arr.length
    }
    reverse(arr, 0, arr.length-1)
    reverse(arr, steps, arr.length-1)
    reverse(arr, 0, steps-1)
    return arr
}

function reverse(arr, left, right){
    
    while(left < right){
        let temp = arr[left]
        arr[left++] = arr[right]
        arr[right--] = temp
    }
}
console.log(rotateArr(arr, 3));