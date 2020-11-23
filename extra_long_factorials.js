https://www.hackerrank.com/challenges/extra-long-factorials/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign&h_r=next-challenge&h_v=zen

// Calculate and print the factorial of a given integer n.

// ============================================

// function extraLongFactorials(n) {
//     let savedN = n;
//     let answerFact = BigInt(1);
//     helperFact(answerFact, savedN);
// };

// function helperFact(factTotal, num) {
//     if (num === 1) {
//         return console.log(factTotal.toString());
//     }
//     let bigNum = BigInt(num);
//     factTotal = factTotal * bigNum;
//     num--;
//     return helperFact(factTotal, num);
// };

// =============================================

function extraLongFactorials(n) {
    let savedN = BigInt(n);
    let answerFact = BigInt(1);
    helperFact(answerFact, savedN);
};

function helperFact(factorialTotal, bigNum) {
    if (bigNum === 1n) {
        return console.log(factorialTotal.toString());
    }
    factorialTotal = factorialTotal * bigNum;
    bigNum-=1n;
    return helperFact(factorialTotal, bigNum);
};

extraLongFactorials(5);
extraLongFactorials(30);
extraLongFactorials(45);





//  (1n, 5) first time around
// bigNum = 5n
// factTotal = 5n * 1n; === 5n
// 5--; === 4

//  second time around
// (5n, 4)
// bigNum = 4n
//  factTotal = 5n * 4n; === 20n
// 4--; === 3

//  third time around
// (20n, 3)
// bigNum = 3n
//  factTotal = 20n * 3n; === 60n
// 3--; === 2

// fourth time around
// (60n, 2)
// bigNum = 2n
// ....

// annotated helperFact()
// function helperFact(factTotal, num) {
//     if (num === 1) {
//         // return console.log("factTotal", factTotal.toString());
//          return factTotal.toString();
//     }
//   let bigNum = BigInt(num);
// //   console.log("bigNum", bigNum);

//   factTotal = factTotal * bigNum;
// //   console.log("factTotal", factTotal);

//   num--;
// //   console.log("recursive call, now on", num);

//   return helperFact(factTotal, num);
// }