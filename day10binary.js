// this function's purpose is to take an input of a number, defined as n here and check how many consecutive 1's show up in the binary conversion of it.

//note the use of javascript's built in "toString(2)"" accepting the radix, or base number to convert.

//note also the use of js type comparisons, comparing '1' ===1 evaluates falsy. but are they similar enough to compare? '1' ==1 alright, they sure are!

function main(n) {
  // const n = parseInt(readLine(), 10);
  //convert to binary
  const binstr = n.toString(2);
  let max = 0;
  let count = 0;

  //count number of consecutive ones: for each element of the array,
  for (let i = 0; i < binstr.length; i++) {
    //check if the element's value is 1, if so...
    if (binstr[i] == 1) {
      //temporarily increment the count..
      count++;
      //check if it's bigger than the max, and if so, set the max to the count.
      if (count > max) {
        max = count;
      }
    } else if (binstr[i] == 0) {
      count = 0;
    }
  }
  console.log(max);
}

main(439);
