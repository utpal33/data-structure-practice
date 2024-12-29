// most asked interview questions in interviews over recursion

//! 1 Factorial

function fact(num){
    if (num === 0){
        return 1
    }
    return num * fact(num-1)
}
// console.log(fact(4));


//! range of Numbers 
// create an arrray with range of numbers
function rangeOfNumbers(start, end){
    if(start > end){
        return []
    }
    return [end, ...rangeOfNumbers(start, --end)]
}
console.log(rangeOfNumbers(1,10));

