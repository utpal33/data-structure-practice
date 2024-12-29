// number is same as earlier after reversing it called palindrom numbers
// using inbuilt method


function isPalindrom(num){

    return num == num.toString().split('').reverse().join('')
}
console.log(isPalindrom(12321))