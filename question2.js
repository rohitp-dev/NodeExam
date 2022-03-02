// QUESTION:2:
// Write a function:// function solution(A);// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that// does not occur in A.

const A = [1, 3, 6, 4, 1, 2];
// const A = [1, 2, 3]
// const A = [−1, −3]
const solution = (arr) => {
   let count = 1;
   if(!arr.length){
      return count;
   };
   while(arr.indexOf(count) !== -1){
      count++;
   };
   return count;
};
console.log("Smallest Positive Number Missing:-",solution(A));