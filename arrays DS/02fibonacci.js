// next number is he sum of previous two number . the series starts with 0 and 1.
//? which is th nth number in the series passing Input as n.

//! using for loop
// function fibonacciSeries(n){
//     let series = [0,1]
//     if (n==0) return 0;
//     if (n==1) return 1;
//     for(let i=2; i<=n; i++){
//         series[i]= series[i-2]+series[i-1]
//     }
//     console.log(series);
//     return series[n]
// }
// console.log(fibonacciSeries(10))

//! using resursion
var fibb = function(n){
    if (n<=1) return n;
    return fibb(n-1)+ fibb(n-2);
}
// console.log(fibb(10))
let s={}
console.log(s[undefined]);