// take an array, a, and preform d left rotations on it, then print out a

let b = [1, 2, 3, 4, 5]
let m = 4

function rotLeft(a, d) {
    let toShift = a.slice(0, d);
    let frag = a.slice(d);
    frag.push(...toShift);
    
    console.log('frag', frag);
    return frag;
}

rotLeft(b, m);