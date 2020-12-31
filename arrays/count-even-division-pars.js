function divisibleSumPairs(n, k, ar) {
  // ar is the array
  // k is dividend
  // n is the integer length of the array.
  let solCount = 0;
  let left = 0;
  let right = 1;
  while (left < n - 1) {
    while (right < n) {
      // check value mod k === 0; if so solCount +=1;
      let sum = ar[left] + ar[right];
      if (sum % k === 0) {
        solCount++;
      }
      right += 1;
    }
    left += 1;
    right = left + 1;
  }
  return solCount;
}

// this snip counts unique pairs where left is less than right, and the entries at let and right sum to an amount that is evenly divided by k.
