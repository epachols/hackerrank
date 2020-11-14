// see: https://www.hackerrank.com/challenges/minimum-distances/problem

// We define the distance between two array values as the number of indices between the two values. Given a , find the minimum distance between any pair of equal elements in the array. If no such value exists, print -1.

// TODO: Since there is a comparison value to be checked against while traversing, I picked a greedy for loop. simple but effective.

function minimumDistances(array) {
  // initializing an empty dictionary object, setting minDist to one larger than it COULD be if there WERE a calculable distance, to compare cases where there are no matching array members.
  let positions = {};
  let minDist = array.length;
  let currentMin;
  //   iterate over the loop, either assigning a first dictionary 'position' or checking the currentMin against the minDist.
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    // if we don't have a dynamically set value in our dictionary yet, make one!
    if (positions[num] === undefined) {
      positions[num] = i;
    } else {
      // check the current minimum distance btw this entry and the last known position.
      currentMin = i - positions[num];
      //   resetting last known position of num.
      positions[num] = i;
      // setting the minimum distance to currentMin if currentMin is smaller
      if (currentMin < minDist) {
        minDist = currentMin;
        currentMin = array.length;
      }
    }
  }
  // bring me back the min distance, or -1 if there isn't one calculable.
  return minDist < array.length ? minDist : -1;
}

let a = [7, 1, 3, 4, 1, 7];
let b = [1, 1];
let c = [1, 2, 3, 5, 9, 10];

minimumDistances(a); // expect 3
minimumDistances(b); // expect 1
minimumDistances(c); // expect -1

// --------------------------------------------------------------------------------
