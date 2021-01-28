// check a string to see if its input is a valid expression set (parentheses use);

// this is basically an enumeration of a call stack.
// treat like a call stack would
// remove an expression every time it's identified.
// soooo... charge along merrily adding things to the stack, removing them when we find their counterpart..

var isValidComments = function (s) {
  let options = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    // closing bracket?
    if (s[i] in options) {
      let current = stack.pop();
      if (options[s[i]] === current) {
        console.log("fair match");
      } else {
        console.log("false due to bad match");
        return false;
      }
    } else stack.push(s[i]);
  }

  if (stack.length) {
    console.log(`false due to stack length`);
    return false;
  }
  //   base case -> sure is a valid expression
  console.log(true);
  return true;
};

var isValid = function (s) {
  if (s.length === 0) return true;
  let options = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] in options) {
      let current = stack.pop();
      if (!(options[s[i]] === current)) {
        return false;
      }
    } else stack.push(s[i]);
  }
  if (stack.length) {
    return false;
  }
  return true;
};

const s = "{}"; // true
const s1 = "({})"; // true
const s2 = "({)}"; // false
const s3 = "[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]"; //true
const s4 = "[[[["; //false

const testAll = () => {
  const assertEqual = (left, right, msg) => {
    if (left !== right) {
      console.log(message);
      return;
    }
    console.log("..success");
  };

  assertEqual(isValid(s), true, "single pair of brackets should pass");
  assertEqual(isValid(s1), true, "double pair of brackets should pass");
  assertEqual(isValid(s2), false, "out of ourder");
  assertEqual(isValid(s3), true, "matched, lots, should work");
  assertEqual(isValid(s4), false, "open brackets only should");
  // iterate over the string;
  // if the character in consideration has an open... in this case is in the map.. push it into the stack.
  // if the character in consideration is a close, it should match the last open pushed into the stack.
  // or that's a big no.
};
testAll();
