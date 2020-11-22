// given two strings, write a function to determine if the second string is an anagram of the first. an anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed by iceman.

// assume all input are words, all lower case

// use case: TODO: frequency counter.

function validAnagram(a, b) {
    // edge case: are they even the same number of characters?
    if (a.length !== b.length) {
        return false;
    }
    // initialize our frequency counters.
    let countObjA = {};
    let countObjB = {};
    for (let char of a) {
        countObjA[char] = (countObjA[char] || 0) + 1
    }
    for (let char of b) {
        countObjB[char] = (countObjB[char] || 0) + 1
    }
    for (let key in countObjA) {
        if (!key in countObjB) {
            return  false;
        } 
        if (countObjA[key] !== countObjB[key]) {
            return  false;
        } 
    }
    return true;
}


// only need to use one store, here, also one less loop to worry about! 
function validAnagram2 (first,second) {
    if (first.length !== second.length) {
        return false;
    }
    const lookup = {};
    for (let char of first) {
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }
    for (let char of second) {
        if (!lookup[char]) {
            return false;
        } else {
            lookup[char] -= 1;
        }
    }
    return true;
}


validAnagram2("aaz", "zaa"); //true
validAnagram2("anagram", "nagaram"); //true
validAnagram2("awesome", "awesom"); //false
validAnagram2("qwerty", "qeywrt"); //true
validAnagram2("texttwisttime", "texttimetwist"); //true
validAnagram2("rat", "car") //false

