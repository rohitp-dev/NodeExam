// QUESTION 3

// Write a function:
// function solution(A);
// That will extract even and odd numbers from an array A.
// For example, given A = [1, 3, 4, 6, 8, 9], the function should return two arrays, index 0 should
// contain array of odd numbers and index 1 should return array of even number
// Note: if there are no even or odd numbers, the function should return an empty array.

let A = [1, 3, 4, 6, 8, 9];
let odd = [];
let even = [];

function solution(A) {
  for (let i = 0; i <= A.length - 1; i++) {
    if (A[i] % 2 != 0) {
      odd.push(A[i]);
    } else {
      even.push(A[i]);
    }
  }
  const result = [odd, even];
  console.log(result[0]);
}
solution(A);
