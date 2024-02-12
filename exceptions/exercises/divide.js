// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

// let a = 10
// let b = 5


function divide(numerator, denominator){
    // numerator = a
    // denominator = b
    
    if (denominator === 0) {
        throw Error('Attempted to divide by zero.');
    }
    // let num = (a / b)
    
    return numerator/denominator;
    }
    
    console.log(divide(10, 0));
    
