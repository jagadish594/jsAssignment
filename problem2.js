/*
Using a single line of code, reverse the order of words in the string below:
var dwarves = "bashful doc dopey grumpy happy sleepy
sneezy"
*/

var dwarves = "bashful doc dopey grumpy happy sleepy sneezy"

console.log(
    dwarves.split(/\b/g).reverse().join('')
)
