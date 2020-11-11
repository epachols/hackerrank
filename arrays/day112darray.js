let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

let arr2 = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
];

const hourglass = (array) => {
  //set max to first hourglass calculation possible
  let maxSum =
    array[0][0] +
    array[0][1] +
    array[0][2] +
    array[1][1] +
    array[2][0] +
    array[2][1] +
    array[2][2];
  let thisSum = 0;

  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      //creating the hourglass sum the long way
      thisSum =
      //hourglass top
        array[i][j] +
        array[i][j + 1] +
        array[i][j + 2] +
        //hourglass midpoint
        array[i + 1][j + 1] +
        //hourglass bottom
        array[i + 2][j] +
        array[i + 2][j + 1] +
        array[i + 2][j + 2];
      //checking the largest sum
      if (thisSum > maxSum) {
        maxSum = thisSum;
        thisSum = 0;
      }
    }
  }
  console.log(maxSum);
};

hourglass(arr2); //expect 19
hourglass(arr); //expect -6

