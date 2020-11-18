function breakingRecords(scores) {
//if she scores more the or less than the minimum each game, increment a record amount
let minBreaks = 0;
let maxBreaks = 0;
let min = 0;
let max = 0;

for (let i=0; i<scores.length; i++) {
    if (i===0) {
        max = scores[i];
        min = scores[i];
    }
    else if (scores[i] > max) {
        max = scores[i];
        maxBreaks++;
    } else if (scores[i] < min) {
        min = scores[i];
        minBreaks++;
    } else {
        console.log("tie, no increment")
    }
}

return([maxBreaks, minBreaks])
}