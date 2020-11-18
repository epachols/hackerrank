// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let arrMax = arr.reduce((a,b) => Math.max(a,b));
    let arrMin = arr.reduce((a,b) => Math.min(a,b));
    let arrSum = arr.reduce((a,b) => a + b)

    let printMin = arrSum - arrMax;
    let printMax = arrSum - arrMin;
    
    console.log(printMin, printMax)
      
    
    }
    
    // miniMaxSum([1,2,3,4,5]);
    miniMaxSum([5,5,5,5,5]);