// go about reversing a string while keeping the words intact

// "do or do not, there is no try" // try no is there not, do or do..

// function reverseTheWords(string) {
//   return string.split(" ").reverse().join(" ");
// }

let string1 = "do or do not, there is no try";

// do while not using reverse, treat as an array of characters;

// take in an array of characters representing a split string and reverse the word order by space separations.

function reverseTheWords(array) {
  let response = [];
  for (let i = 0; i < array.length; i++) {
    let currentSubst = [];

    while (array[i] !== " " && i < array.length) {
      currentSubst.push(array[i]);
      i++;
    }
    if (response.length && currentSubst.length) {
      currentSubst.push(" ");
    }
    if (currentSubst.length) response.unshift(...currentSubst);
  }
  return response;
}

let string2 = "there is no try, do or do not";
let arr2 = [
  "t",
  "h",
  "e",
  "r",
  "e",
  " ",
  "i",
  "s",
  " ",
  "n",
  "o",
  " ",
  "t",
  "r",
  "y",
  ",",
  " ",
  "d",
  "o",
  " ",
  "o",
  "r",
  " ",
  "d",
  "o",
  " ",
  "n",
  "o",
  "t",
];

console.log(`\n\n`);
console.log(reverseTheWords(arr2));
console.log(reverseTheWords(arr2).join(""));
console.log(`\n\n`);

// let testArr = ["d", "o", " ", "o", "r", " "];
// d, o, -    response = ["d", "o", " " ]
// o , r -    response = ["o", "r", " ", "d", "o"]

// console.log(reverseTheWords(testArr));
