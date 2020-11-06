
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

    jumpingOnClouds([0,0,1,0,0,1,0]) //expect 4