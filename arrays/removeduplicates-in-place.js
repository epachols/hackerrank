// write a function to remove the duplicates in place, using 0(1) extra space.

var removeDuplicates = function (nums) {
  let current = 0;
  let next = 1;
  while (current < next && next < nums.length) {
    while (nums[next] === nums[current]) {
      next += 1;
    }
    nums.splice(current + 1, next - current - 1);
    next = current + 2;
    current = next - 1;
  }
  return nums.length;
};

const testSuite = () => {
  const assertEqual = (left, right, message) => {
    if (left !== right) {
      console.log(message);
      return;
    }
    console.log("..success", "\n");
  };

  assertEqual(
    removeDuplicates([0, 0, 0, 0, 0]),
    1,
    "all entries the same should return length 1"
  );
  assertEqual(
    removeDuplicates([0, 1, 1, 1, 1, 2, 3, 4, 4]),
    5,
    "lone duplicate set at end, should return 5"
  );
  assertEqual(
    removeDuplicates([0, 1, 1, 1, 1, 2, 3, 4, 4, 4]),
    5,
    "lone duplicate set at end, should return 5"
  );
  assertEqual(
    removeDuplicates([1, 1, 2]),
    2,
    "lone duplicate set at beginning, should return 2"
  );
  assertEqual(
    removeDuplicates([0]),
    1,
    "single entry should skip and return 1"
  );
};

testSuite();
