// It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by 1 from 1 at the front of the line to  at the back.

// Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if n=8 and person 5 bribes person 4, the queue will look like this: 1,2,3,5,4,6,7,8.

// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

// Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.


// things to note:if any entry is more or less than 2 positions from start, OR has had to move more than twice to get to our final, then NO!
// final state is the array given. initial state would be the ordering operation.
// 1. so doing a handmade sort method on the array given and keeping track of #moves of each item. 
// 2. making sure along the way... if the # of moves of any individual got to 3 it instantly returned too chaotic
// 3.  then totalling #moves

// for 60% of the marbles, n is less than 10^3 (number of items)
//  for 100% of the marbles, n is less than 10^5

// OR: COULD walk the array. take each individual item and see if it is less than 3 spaces from where it started... 

// but what about solutions that swap backward, and not in a straight line, to work? would have to keep track of every single move, maybe in a hashmap?

//  a bribe involves the briber moving left, and the bribee moving right.

// arrays: 
let a = [2,1,5,3,4] //expect 3
let b = [2,5,1,4,3] //expect "Too Chaotic"

function minimumBribes(q) {
    // what do we care about?
    let movesMap = new Map();
    
    for (let person of q) {
        // walk backward through the list
        // check if a person is "near their spot" or within 2 of i+1 
        // if not, escape! return Too Chaotic,
        //if so....

    }
    // return EITHER: min# bribes, or "Too Chaotic" if you can't get there
}

minimumBribes(a);
minimumBribes(b);


let c = [1,2,3,4,5,6] // with 6 bribing twice, [1,2,3,6,4,5] 6 is at index 3, which is val's idx + 2 > val > val's idx - 2
// if 6 bribes twice, 4 bribes twice