var findNumbers = function (nums) {
  let evens = 0;
  for (let ii = 0; ii < nums.length; ii++) {
    let digitCount = 0;
    while (nums[ii] >= 1) {
      nums[ii] = nums[ii] / 10;
      digitCount += 1;
    }
    evens = !(digitCount % 2) ? evens + 1 : evens;
    digitCount = 0;
  }
  return evens;
};

const findNumbersString = (nums) => {
  let evens = 0;
  for (let ii = 0; ii < nums.length; ii++) {
    evens = !((nums[ii] + "").length % 2) ? evens + 1 : evens;
  }
  return evens;
};

const assertEqual = (left, right, message) => {
  if (left != right) {
    console.log({ left }, `\n expected: ${right} \n`, { message });
    return;
  }
  console.log(".");
};

console.time("modulus: test 1");
assertEqual(
  findNumbers([12, 345, 2, 6, 7896]),
  2,
  "there are exactly two even digited numbers"
);
console.timeEnd("modulus: test 1");

console.time("modulus: test 2");
assertEqual(findNumbers([100000]), 1, "there is one number, and it's even");
console.timeEnd("modulus: test 2");

console.time("toString: test 1");
assertEqual(
  findNumbersString([12, 345, 2, 6, 7896]),
  2,
  "there are exactly two even digited numbers"
);
console.timeEnd("toString: test 1");

console.time("toString: test 2");
assertEqual(
  findNumbersString([100000]),
  1,
  "there is one number, and it's even"
);
console.timeEnd("toString: test 2");

// the string conversion is about 1k times faster for small arrays, as the built in length property of a string which is defined at the time of creation is an extremely fast operation

// note that the string conversion method of concatenating an empty string"" also tests marginally faster than does the built in array.prototype.tostring in most cases.
