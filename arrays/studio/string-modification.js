const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.

newStr = str.slice(3) + str.slice(0, 3)
console.log(newStr);

// let newStr = str.replace('L', '').replace('a', '').replace('u', '') + "Lau";


console.log(`The original variable was ${str}, after it was modified it was ${ newStr}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userNum = input.question("How many characteres will be relocated?");
console.log(userNum);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (userNum < 10) {
    console.log(newStr = str.slice(userNum) + str.slice(0, userNum));
} else {
    userNum = 3
    console.log(newStr = str.slice(userNum) + str.slice(0, userNum));
}
