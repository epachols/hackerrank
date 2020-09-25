// the below function takes in input in the form of an array with \n line splits. very awkward but easy enough to parse.


function processData(input) {
    //Enter your code here
    let inputArr = input.split("\n");

    for (i=1; i<inputArr.length; i++) {
      let wordArr = inputArr[i].split("");
      let oddStr = "";
      let evenStr = "";

        for (let j=0; j<wordArr.length; j++) {
            if (j%2===0) {
                evenStr = evenStr + wordArr[j];
            } else {
                oddStr = oddStr + wordArr[j];
            }
        }
     console.log(evenStr + " " + oddStr);
    }
} 