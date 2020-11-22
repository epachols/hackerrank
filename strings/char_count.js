
// function charCount(str) {
//     let obj = {};
//     for (let char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }

// so I'm using regex, but how efficient is this? I have heard that performance for regex varies based on browser.

// might say something like "hi".charCodeAt(0) = 104 the character code for h

// someone else checked for alphanumerics via a for loop and checking if the code 

// see adjacent ./alphanumeric.js file



function charCount(str) {
    let obj = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric 0-9
    !(code > 64 && code < 91) && // upper alpha
    !(code > 96 && code < 123)) { // lower alpha
        return false;
    }
    return (true) // true;
 }

 charCount("howdy doody");
 