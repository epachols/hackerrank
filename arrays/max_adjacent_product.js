// write a function that produces the maximum product of two adjacent array memebers. 

// note => this may not fully account for the 0 case (a number in the array being 0, although 0 is not technically an integer.)

function adjacentElementsProduct(inputArray) {
    let maxProduct = -Infinity;
    let currentProduct = inputArray[0]*inputArray[1];
    maxProduct = currentProduct;
    
    // edge case - what about 0's? - not counted 
    
    for (let ii=1; ii<inputArray.length; ii++) {
        currentProduct = (currentProduct / inputArray[ii-1]) * inputArray[ii+1];
        if (currentProduct > maxProduct) {
            maxProduct = currentProduct;
        }
    }
    return maxProduct;
}