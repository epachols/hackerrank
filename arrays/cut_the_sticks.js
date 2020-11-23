// You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

// Given the lengths of n sticks, print the number of sticks that are left before each iteration until there are none left. input is an array, each value representing the length of the stick.

// Complete the cutTheSticks function below.
// function cutTheSticks(arrOfSticks) {
//   // sort the array
//   let sortedArr = arrOfSticks.sort((a, b) => a - b);
//   let smallestStick = sortedArr[0];
//   let afterCut = [];
//   let answer = [];

//   cutThem(sortedArr, answer, smallestStick);
//   return answer.forEach((item) => console.log(item));
// }

// const cutThem = (sortedArr, answer, smallestStick) => {
//   // need to escape this if the ending condition is met.
//   // return when done (when all remaining sticks are same length)
//   if (
//     sortedArr.length < 1
//     //  || sortedArr[arr.length - 1] === smallestStick
//   ) {
//     return;
//   }

//   // print the number of sticks cut before each operation.
//   console.log(sortedArr.length);
//   //   add it to the 'answer'
//   answer.push[sortedArr.length];

//   // cut all and save only the ones who are longer than the smallest
//   afterCut = sortedArr.filter((stick) => {
//     stick - smallestStick > smallestStick;
//   });
//   console.log("afterCut", afterCut);

//   // resetting smallest stick to first index after cut&filter
//   smallestStick = afterCut[0];

//   // call this again until escape condition
//   return cutThem(afterCut, answer, smallestStick);
// };

// let aA = [1, 1, 2, 4, 6, 7];

// cutTheSticks(aA);
