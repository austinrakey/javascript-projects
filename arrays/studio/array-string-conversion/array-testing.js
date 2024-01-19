let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];



//2) 
function reverseCommas() {
	let check;

	//TODO: 1. create and instantiate your variables.

	//TODO: 2. write the code required for this step
	let tempArray1 = []
	
	if (protoArray1.includes(',')) {
		tempArray1 = (protoArray1.split(',').reverse().join(','));
	} else {
		console.log("No commas found");	
	}


	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
		let output = tempArray1;
		return output;
}

//3)
function semiDash() {
	let check;

//TODO: write the code required for this step

let tempArray2 = []
	
if (protoArray2.includes(';')) {
	tempArray2 = (protoArray2.split(';').sort().join('-'));
} else {
	console.log("No semicolons found");
}

	let output = tempArray2;
	return output;
}

//4)
function reverseSpaces() {
	let check;
  //TODO: write the code required for this step

  let tempArray3 = []
	
if (protoArray3.includes(' ')) {
	tempArray3 = (protoArray3.split(' ').sort().reverse().join(' '));
} else {
	console.log("No spaces found");
}

	let output = tempArray3
	return output;
}

//5)
function commaSpace() {
	let check;
	//TODO: write the code required for this step
  
	let tempArray4 = []
	
	if (protoArray4.includes(', ')) {
		tempArray4 = (protoArray4.split(', ').reverse().join(','));
	} else {
		console.log("No commas+space found");
	}
	
	let output = tempArray4;
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
