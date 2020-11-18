// an integer d is a divisor of an integer n if the remainder of n / 2 = 0
// given an integer, for each digit that makes up the integer determine whether it is a divisor.
// count the number of divisors
// return an integer representing the number of digits of d that are divisors of n

// Complete the findDigits function below.
// what-ifs: what if n is 0? 
function findDigits(n) {
  let counter = 0;
  let nArr = n.toString(10).split("");
  for (let digit of nArr) {
      if (n % digit === 0) {
          counter ++;
      }
  }
  return console.log(counter); counter;
}

findDigits(112);
findDigits(481787452);
findDigits(22);
findDigits(111);
