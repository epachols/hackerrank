// counting only for 32 bit signed integer numbers, reverse the digits of an number input with a function called 'reverse'.

// because of that 32 bit hint, right away we know we can't have any number whose absolute value is > 2**31 - 1 (the sign takes up a slot in our bits)

// var reverse = function (x) {
//   let str = x + "";
//   let res = "";
//   let neg = false;
//   if (str[0] === "-") {
//     neg = true;
//     str = str.substr(1);
//   }
//   for (i = str.length - 1; i >= 0; i--) {
//     res += str[i];
//   }
//   if (res > 2 ** 31 - 1) return 0;
//   return neg ? -+res : +res;
// };

// const reverse = (x) => {
//   let parseThatThang = parseFloat(x.toString().split("").reverse().join(""));
//   return Math.abs(parseThatThang) > 2 ** 31 - 1
//     ? 0
//     : parseThatThang * Math.sign(x);
//   // since parseFloat loses all its accuracy above the max 32 bit, you definitely wouldn't want to use this on any number outside of the 32 bit binary integer values if you need precision, which most numerical operations rely on
// };

const reverse = (x) => {
  // my favorite way!
  let abs = Math.abs(x).toString();
  let len = abs.length - 1;
  let res = "";
  for (let i = len; i >= 0; i--) {
    res = res + abs[i];
  }
  return res > 2 ** 31 - 1 ? 0 : res * Math.sign(x);
  // definitely ok to evaluate abs.length - 1 each time through the loop, as the maximum number of loop digits we would be facing is 7 thanks to the 32-bit limitation
};

const testSuite = () => {
  const assertEqual = (left, right, message) => {
    if (left !== right) {
      console.log(message);
      return;
    }
    console.log("..success");
  };

  console.time("1");
  assertEqual(reverse(123), 321, "should be 321");
  console.timeEnd("1");

  console.time("2");
  assertEqual(reverse(-425), -524, "should be -524");
  console.timeEnd("2");

  console.time("3");
  assertEqual(reverse(-20394), -49302, "should be -49302");
  console.timeEnd("3");

  console.time("4");
  assertEqual(
    reverse(2147483647),
    0,
    "max binary int used, should be 0, reversed integer too big"
  );
  console.timeEnd("4");

  console.time("5");
  assertEqual(reverse(1534236469), 0, "should be 0, reversed integer too big");
  console.timeEnd("5");
};

testSuite();
