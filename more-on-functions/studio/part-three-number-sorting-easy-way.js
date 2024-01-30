// function findMinValue(arr){
//     let min = arr[0];
//     for (i = 0; i < arr.length; i++){
//       if (arr[i] < min){
//         min = arr[i];
//       }
//     }
//     return min;
//   }

// ////////////////////////////////////////////////////////

// let sortedNums = []


// function sortNewArray(numArray) {

// let arrLength = numArray.length

// for (let i = 0; i < arrLength; i++) {
// sortedNums.push(findMinValue(numArray));
// numArray.splice(numArray.indexOf(findMinValue(numArray)), 1);
// }

// return sortedNums;

// }


//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

nums1.sort(function(a, b){return a-b});
nums2.sort(function(a, b){return a-b});
nums3.sort(function(a, b){return a-b});

console.log(nums1);
console.log(nums2);
console.log(nums3);
//Sort each array in decending order.
nums1.sort(function(a, b){return a-b}).reverse();
nums2.sort(function(a, b){return a-b}).reverse();
nums3.sort(function(a, b){return a-b}).reverse();

console.log(nums1);
console.log(nums2);
console.log(nums3);