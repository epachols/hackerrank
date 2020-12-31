function birthday(s, d, m) {
  let count = 0;
  let sum = 0;
  //making a first sum
  for (let ii = 0; ii < m; ii++) {
    sum += s[ii];
  }
  if (sum === d) count++;
  //sliding the window
  for (let jj = m; jj < s.length; jj++) {
    sum = sum + s[jj] - s[jj - m];
    if (sum === d) count++;
  }
  return count;
}

//   s is the array of chocolates
//   d is the birthday -> also sum of chocolate squares
//   m is birth month, also length of subarray needed.

//classic sliding window problem.
