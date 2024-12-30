// Reverse a String using recursion


//! using JS inbuilt Methods
// function reverse(str){
//     return str.split('').reverse().join('')
// }

//! brute force
// function reverse(str){
//     let rev =''
//     for(let i=str.length-1; i>=0; i--){
//         rev+=str[i]
//     }
//     return rev
// }


//! using recursion
function reverse(str){
    if(str.length == 1){
        return str
    }
    return reverse(str.slice(1))+str[0]
}

console.log(reverse('utpalkant'));
