// check a number is palidrom or not using recursion

//!for string palindrom
// function isPalidrom(str){
//     if (str.length<=1){
//         return true
//     }
//     if (str[0] !== str[str.length-1]){
//         return false
//     }

//     return isPalidrom(str.slice(1,-1))
// }

//! palindrom with recursion for numbers input only
function isPalindrom(num, rev=0, org=num){
    if(num == 0){
        return rev==org
    }
    return isPalindrom(Math.trunc(num/10), rev*10+(num%10), org)
}
console.log(isPalindrom(12321));


//! without recursion
// function isPalindrom(num){
//     let org = num
//     let rev = 0
//     while (num>0){
//         rev = rev*10+(num%10)
//         num = Math.trunc(num/10)
//     }
//     if (rev == org)
//         return true
//     else
//         return false
    
// }


// console.log(isPalindrom(12321));