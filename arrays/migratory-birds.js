// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  arr.sort((a, b) => a - b);
  // sorting is important here, especially useful when dealing with integer values!
  let hash = {};
  let mostFreqId = arr[0];
  let most = 0;
  for (let i = 0; i < arr.length; i++) {
    // checking and updating the frequency count hashmap
    if (arr[i] in hash) {
      hash[arr[i]] += 1;
    } else hash[arr[i]] = 1;
    // updating most if the hash[arr[i]] is larger
    if (hash[arr[i]] > most) {
      most = hash[arr[i]];
      mostFreqId = arr[i];
    }
  }
  return mostFreqId;
}
