// You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

// Given the lengths of n sticks, print the number of sticks that are left before each iteration until there are none left. input is an array, each value representing the length of the stick.

// Complete the cutTheSticks function below.

// TODO: NOTE: the hackerrank problem poorly words the issue, as it requests you 'remove all the pieces of the smallest size before continuing'. what happens to the array members that are the smallest size after the cut? Wouldn't they need to be thrown out in a real-world application too? after all, we ARE getting rid of anything that is the size of the smallest stick.

function cutTheSticks(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let answer = [];
  let smallest;
  cutHelper(sortedArr, answer, smallest);
  return console.log(answer); answer;
}

function cutHelper(sortedArr, answer, smallest) {
  if (sortedArr.length < 1) {
    return;
  }
  // add current length to answer array
  answer.push(sortedArr.length);
  smallest = sortedArr[0];
  // cut and filter
  let cutArr = sortedArr
    .map((element) => element - smallest)
    .filter((element) => element !== 0);

  cutHelper(cutArr, answer, smallest);
}


// ======================================================================
// HARD MODE** piece removal includes the array members who have been shortened to the length of removal, as well.
//  also, what about

function cutTheSticksHard(arrOfSticks) {
  let sortedArr = arrOfSticks.sort((a, b) => a - b);

  let answer = [];
  let smallest = sortedArr[0];
  cutHelperHard(sortedArr, answer, smallest);

  return console.log(answer);
  answer;
}

const cutHelperHard = (sortedArr, answer, smallest) => {
  // TODO: make sure this conditional is right, problem unclear about requirements. do we proceed until all items removed? do we count the array
  if (
    sortedArr.length < 1
    //  || sortedArr[sortedArr.length - 1 === smallest]
  ) {
    return;
  }
  // each time we add the length of the remaining array to the answer
  answer.push(sortedArr.length);
  //   console.log("answer", answer);

  // set the new smallest as smallest of sorted array
  smallest = sortedArr[0];
  //   console.log("smallest", smallest);

  // do the cutting
  let cutArr = sortedArr
    .map((element) => element - smallest)
    .filter((element) => element !== smallest && element !== 0);
  // console.log("cutArr", cutArr, "\n \n");

  //call again until it's out of numbers!
  cutHelperHard(cutArr, answer, smallest);
};
// ==================================================================

let aA = [1, 2, 2, 3,5,5,5,5];
let bB = [1, 4, 1, 7, 9, 0];
let cC = [15, 15, 13, 2, 2, 9];
let dD = [1, 1, 2, 3, 4, 7, 4, 0];

cutTheSticks(aA);
// cutTheSticks(bB);
// cutTheSticks(cC);
// cutTheSticksHard(dD);

// many of the js solutions involve splicing individual answers. dumb, as reindexing any sizeable array takes more time than mapping a new one.
