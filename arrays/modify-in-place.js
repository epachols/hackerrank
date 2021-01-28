// modify the original nums array in place to remove all instances of the val value. the order of the array can be changed.

//  -------------------- working solution
// when you are worried about mixing up the indexes ahead of you, flip your damn iteration choice. duhhhhhh~
// tried this looping through in the positive direction first, that was wrong - it kept changing array indices by reindexing everything ahead of it!
// the reindexing is generally a bad habit, so doing a single operation on the bulk of elements and doing a single re-indexing would be preferable.
var removeElement = function (nums, val) {
  //   nums.sort((a, b) => a - b);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
};

const nums = [3, 0, 1, 2, 3, 3, 4, -3, 2, 3];
// sorted = [0,1,2,2,3,3,3,3]
const nums1 = [3, 2, 2, 3];
const nums2 = [1];
const nums3 = [];

removeElement(nums, 3);
removeElement(nums1, 3);
removeElement(nums2, 3);
removeElement(nums3, 3);

// ----------------

// 2.
// var removeElement = function (nums, val) {
//   nums.sort((a, b) => a - b);
//   let cur = 0;
//   let next = 1;
//   while (next < nums.length) {
//     console.log({ cur }, { next });

//     if (nums[cur] === val) {
//       while (nums[cur] === val) next++;
//       nums.splice(cur, next - cur - 1);
//     }

//     cur = next;
//     next = cur + 1;
//     if (cur === nums.length - 1) break;
//   }
// };
// // current issue - this bugger gets caught in its own loop.

// ----------------

// 3.
// var removeElement = function (nums, val) {
//   console.log({ nums });
//   nums.sort
//   nums.forEach((num, index) => {
//     console.log({ num, val, index });
//     if (num === val) {
//       console.log(`${num} at index ${index} matches ${val}, splicing`);

//       nums.splice(index, 1);
//       console.log({ nums });
//     }
//   });
//   console.log(`final nums:`, nums);
// };
// //issue: this one doesn't pick up when we just spliced one and the next char should be spliced as well, reason being: after splicing, it moves on by index, and the indices have changed! what about walking backward on the array?
