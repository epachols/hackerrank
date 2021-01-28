// function maximumOccurringCharacterSlow(string) {
//   let charCountMap = {};
//   let maxOccurrences = 1;
//   let possibles = [];

//   for (let i = 0; i < string.length; i++) {
//     let currentMax = 1;
//     // if it's not in there, put it in there
//     if (!(string[i] in charCountMap)) {
//       charCountMap[string[i]] = 1;
//     }
//     // else increment the current count.
//     else {
//       charCountMap[string[i]]++;
//       // make sure the currentMax is the max count of the current string char.
//       currentMax = charCountMap[string[i]];
//       if (currentMax > maxOccurrences) {
//         maxOccurrences = currentMax;
//       }
//     }
//   }
//   for (let key in charCountMap) {
//     if (charCountMap[key] === maxOccurrences) {
//       possibles.push(key);
//     }
//   }
//   let first = Infinity;
//   for (let i = 0; i < possibles.length; i++) {
//     if (string.indexOf(possibles[i]) < first)
//       first = string.indexOf(possibles[i]);
//   }
//   return string[first];
// }

function maximumOccurringCharacter(string) {
  let charCountMap = {};
  let maxOccurrences = 1;

  for (let i = 0; i < string.length; i++) {
    let currentMax = 1;
    if (!(string[i] in charCountMap)) {
      charCountMap[string[i]] = {
        occ: 1,
        first: i,
      };
    } else {
      charCountMap[string[i]].occ++;
      currentMax = charCountMap[string[i]].occ;
      if (currentMax > maxOccurrences) {
        maxOccurrences = currentMax;
      }
    }
  }

  let first = Infinity;
  for (let key in charCountMap) {
    if (charCountMap[key].occ === maxOccurrences) {
      if (charCountMap[key].first < first) {
        first = charCountMap[key].first;
      }
    }
  }
  return string[first];
}

// ////////////////////////////////////////////////////////////////////////////////////
console.log(maximumOccurringCharacter((str1 = "abbccd"))); // b
console.log(maximumOccurringCharacter((str2 = "aabbbcccd"))); // b
console.log(maximumOccurringCharacter((str2 = "aabbcccad"))); // a we want a, will this return c?
// console.log(maximumOccurringCharacter((str2 = "abcd"))); // a
// console.log(maximumOccurringCharacter((str2 = "abcd"))); // a


const firstWinner = (chars) => {
  if (!chars || chars.length == 0) {
      return null;
  }
  map = {}
  position = 0
  const updatePositionAndCount = (char, position) => {
      if (!map[char]) {
          map[char] = {char, position, count: 0}
      }
      map[char].count++;
  }
  for (char in chars) {
      updatePositionAndCount(char, position) 
      position++
  }
  const sortedMap = Object.values(map).sort(
      (a, b) => {
          if (a.count === b.count) {
              return a.position - b.position
          }
          // count is DESCENDING
          return  b.count - a.count;
      }
  )
  return sortedMap[0].char;
}