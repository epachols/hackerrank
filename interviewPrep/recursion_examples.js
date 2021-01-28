// write a function that takes in array and a callback function,
// the function someRecursive should return true if any member of the array returns true,
// otherwise returns false.

// This is basically a rewrite of the array.prototype.some() method,
// returns true if any of the entries satisfy the condition

// function someRecursive(arr, callback) {
//   let inQuestion = arr.pop();
//   if (callback(inQuestion) === true) return true;
//   if (arr.length === 0) return false;
//   return someRecursive(arr, callback);
// }

// the following function takes in an array and fully flattens it, recursively

// function flatten(arr) {
//   let newArr = [];
//   for (let ii = 0; ii < arr.length; ii++) {
//     if (Array.isArray(arr[ii])) {
//       newArr = [...newArr, ...flatten(arr[ii])];
//     } else newArr.push(arr[ii]);
//   }
//   return newArr;
// }

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

// capitalize first letter of every entry of an array of strings
// function capitalizeFirst(arr, res = []) {
//   let current = arr.pop().split("");
//   current[0] = current[0].toUpperCase();
//   current = current.join("");
//   res.unshift(current);
//   if (!arr.length) {
//     console.log({ res });
//     return res;
//   }
//   return capitalizeFirst(arr, res);
// }

// capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']

// function capitalizeWords(array, result) {
//   // add whatever parameters you deem necessary - good luck!
//   result = result ? result : [];
//   let current = array.pop();
//   current = current.toUpperCase();
//   result.unshift(current);

//   console.log(result);

//   if (!array.length) return result;
//   else return capitalizeWords(array, result);
// }

// let words = ["i", "am", "learning", "recursion"];
// capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
