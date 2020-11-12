//  write a function that will merge two sorted arrays
arr1 = [2,4,6,8];
arr2 = [1,3,5,7,9,11,15];




// 1. Brute force.
const mergeTwoSortedArrays = (a, b) => {
    let combinedArr = [].concat(a, b);
    return combinedArr.sort((c, d) => c-d);
}

// 2. simultaneous traverse.
const merge2sortedArrays = (a, b) => {
    let answerArr = [];
    let aCopy = a;
    let bCopy = b;

    while (aCopy.length && bCopy.length) {
        answerArr.push(aCopy[0] < bCopy[0] ? aCopy.shift() : bCopy.shift());
    }
        // handling edge case of items remaining in one of the sorted arrays.
    if (aCopy.length === 0 && bCopy.length > 0) {
        answerArr.push(...bCopy);
    }
    if (bCopy.length === 0 && aCopy.length > 0) {
        answerArr.push(...aCopy);
    }   
    // console.log(answerArr);
    return answerArr;
}
// 3. maps O(n) time and O(n) extra space. 1. insert both elements in a map as keys. can be done as js? seen only in more strict languages

console.time("merge2SortedArrays");
merge2sortedArrays(arr1, arr2);
console.timeEnd("merge2SortedArrays");
console.log("\n \n \n");


console.time("mergeTwoSortedArrays");
mergeTwoSortedArrays(arr1, arr2);
console.timeEnd("mergeTwoSortedArrays");

// https://stackoverflow.com/questions/57763205/what-is-array-prototype-sort-time-complexity

// Firefox uses merge sort. Chrome, as of version 70, uses a hybrid of merge sort and insertion sort called Timsort.

// The time complexity of merge sort is O(n log n). While the specification does not specify the sorting algorithm to use, in any serious environment, you can probably expect that sorting larger arrays does not take longer than O(n log n) (because if it did, it would be easy to change to a much faster algorithm like merge sort, or some other log-linear method).

// While comparison sorts like merge sort have a lower bound of O(n log n) (i.e. they take at least this long to complete), Timsort takes advantages of "runs" of already ordered data and so has a lower bound of O(n).