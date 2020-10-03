
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

