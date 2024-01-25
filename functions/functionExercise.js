function makeLine(noOfHashmarks) {
    let n = ""
    for (let i = 0; i < noOfHashmarks; i++){
    n += "#"
    }
    return n;
}

console.log(makeLine(5) + '\n');



function makeSquare(size){
    let square = ""
    for (let i = 0; i < size; i++){
    square = (square + makeLine(size) + '\n');
    }
return square.slice(0, -1)
}

console.log(makeSquare(5) + "\n");



function makeRectangle(width, height){
    let rectangle = ""
    for (let i = 0; i < height; i++){
        rectangle += (makeLine(width) + "\n")
    }
    return rectangle.slice(0, -1);
}

console.log(makeRectangle(5, 3) + "\n");



function makeDownwardStairs(height){
    let stairs = ""
    for (let i = 1; i <= height; i++){
        stairs += (makeLine(i) + '\n')
    }
    return stairs.slice(0, -1);
}

console.log(makeDownwardStairs(5) + "\n");




function makeSpaceLine(numSpaces, numChars){
    let spaces = ""
    let chars = ""
    

    for (let i = 0; i < numSpaces; i++){
        spaces += " "
    }
    for (let i = 0; i < numChars; i++){
        chars += "#"


    }
let spaceLine = spaces + chars + spaces;

    return spaceLine
}

console.log(makeSpaceLine(3, 5)+ "\n");




// function makeIsoscelesTriangle(height){
//     let isoTri = ""
//     let spaces = 0
//     let chars = 0

//     for (let i = 1; i < height; i + 2){
//         chars = i
//     }

//     for (let j = height; j > 0; j--){
//         spaces = j
//     }

//     isoTri = (makeSpaceLine(spaces, chars) + '\n')
    


// return isoTri

// }

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }

console.log(makeIsoscelesTriangle(5) + "\n");



function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}


function makeDiamond(height) {

let diamondExercise = makeIsoscelesTriangle(height) + "\n" + reverse(makeIsoscelesTriangle(height))



return diamondExercise
}


console.log(makeDiamond(5));