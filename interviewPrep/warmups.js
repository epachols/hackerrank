
// ============================================
function sockMerchant(n, ar) {
    let colors = [];
    let pairs = 0;
    for (let i=0; i<ar.length; i++) {
        if (!colors.includes(ar[i])) {
            colors.push(ar[i]);
        } else {
            pairs++;
            colors = colors.filter(item => item !== ar[i]);
        } 
    } 
    return pairs;
    }


// ============================================


function countingValleys(steps, path) {
    // Write your code here
    let currentLvl = 0;
    let valleyCount = 0;

    for (let i=0; i<steps; i++) {
        if (path[i]==="U") {
            currentLvl++;
            if (currentLvl ===0) {
                valleyCount++;
            }
        } else if (path[i]==="D") {
            currentLvl--;
        }
    }
    return (valleyCount)
}


// ============================================

function jumpingOnClouds(c) {
    let len = c.length;
    let jumps = 0;
    let currentCloudIdx = 0;
    
    do {
        if (c[currentCloudIdx+1] === undefined) {
            return(jumps)
        } else if (c[currentCloudIdx + 2]===0) {
            jumps++;
            currentCloudIdx +=2;
            console.log('doublejump!');
        } else if (c[currentCloudIdx + 1]===0) {
            jumps++;
            currentCloudIdx++;
            console.log('singlejump!');
        }
    }
    while (currentCloudIdx < len);
    }

    // jumpingOnClouds([0,0,1,0,0,1,0]) //expect 4

    
// ============================================
function repeatedString(s, n) {
    // s is the string to be repeated infintely
    // n is the number of digits in the repeated string.
    let reps = Math.floor(n / s.length);
    let asInString = 0;
    let count = 0;
    let len = s.length;
    // iterate over the string to find the number of a's in it
    for (let i=0; i< len; i++) {
        if (s[i] === 'a') {
            asInString++;
        }
    }
    count = Math.floor(reps * asInString);
    //if there is a remainder (n%s.length) being greater than 0,
    for (i=0; i<(n % len); i++) {
        if (s[i] === 'a') {
            count++;
        }
    }
    // print/return a single integer indicating how many 'a's there are.
    return count;
    }

  
    repeatedString('epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq', 549382313570); //expect 16481469408