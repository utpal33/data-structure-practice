// fibonacci series ----->>>> 0,1,1,2,3,5,8,13,21,34,55,89,144
// fibb(10) = 55  ---->>>> as 10 is the index value we are providing assumed 0-indexed 
//that is at 10th index the value is 55 in the fibonacci series.

git 

console.log(fibb(5));


//! withour recursion
// function fibb(num){
//     let fibSeries = [0,1]
//     for(let i=2; i<=num;i++){
//         let next = fibSeries[i-2]+fibSeries[i-1]
//         fibSeries.push(next)
//     }
//     console.log(fibSeries);
// }
// fibb(10)