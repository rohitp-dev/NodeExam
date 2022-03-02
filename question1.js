// Question 1:

// You have an array containing the following values [10, 20, 60, 30, 54, 39]. Write a function to get
// the sum of all elements of an array.
// Note:- This function should manage different possibilities.

let sum = 0;
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      sum = sum + arr[i];
    }
  }
  return sum;
}

let arr = [10, 20, 60, 30, 54, 39,"hello"];
let n = arr.length;
var result = solution(arr);
console.log(result);
