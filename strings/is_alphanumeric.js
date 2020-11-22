function isAlphaNumeric(str) {
    let code;

    for (let ii=0; ii<str.length; ii++) {
        code = str.charCodeAt(ii);
        
        if (!(code > 47 && code < 58) && // numeric 0-9
        !(code > 64 && code < 91) && // upper alpha
        !(code > 96 && code < 123)) { // lower alpha
            return false;
        }
        return console.log(true) // true;
    }
}



 function singleAlphaNumeric(char) {
    code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric 0-9
    !(code > 64 && code < 91) && // upper alpha
    !(code > 96 && code < 123)) { // lower alpha
        return false;
    }
    return (true) // true;
 }

console.log("isAlphaNumeric", "hi");
 isAlphaNumeric("hi");
