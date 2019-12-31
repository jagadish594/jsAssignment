/*
Write a function that takes a number (from 1 to 12) and return its corresponding month
name as a string.
*/

const getMonthFromNum = (num) =>{
    if(Number.isInteger(num) === true && num >= 1 && num <= 12){
        const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
        return months[num-1];
    }
    else {
        return "Please enter a number between 1 to 12";
    }
}

console.log(getMonthFromNum(12));
