/*
Write a custom method to replace the string "The quick brown fox jumps
over the lazy dog" with the string "The1 quick2 brown3 fox4 jumps5
over6 the7 lazy8 dog9"
*/

let str1 = "The quick brown fox jumps over the lazy dog"
let str2 = "The1 quick2 brown3 fox4 jumps5 over6 the7 lazy8 dog9"

const replaceString = (inputStr) =>{
    if(typeof inputStr === 'string'){
        return inputStr.split(' ').map((word, i) => {
            i++
            return word+i
        }).join(' ')
    }
    else return "Invalid string"
}

console.log(replaceString(str1))


