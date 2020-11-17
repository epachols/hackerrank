//  https://www.hackerrank.com/challenges/bon-appetit/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

// Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

//  bill is the bill array of prices (whole dollar)
//  k is the index of the item anna doesn't want.
//  b is the amount anna was charged for the meal.

function bonAppetit(bill, k, b) {
    // declaring what they didn't share so it's read only once during the reduce statement
  let annasUneaten = bill[k];

  //   find the fair split bill
  let fairTotal =
    bill.reduce((accumTot, currentItem) => accumTot + currentItem
    );
    let fairSplit = (fairTotal - annasUneaten) / 2


  if (b-fairSplit === 0) {
      return console.log("Bon Appetit");
  } else {
      return console.log(b-fairSplit);
  }
}
// TODO: what's wrong with the above? it won't count ANY of the entries that match the saved value. BANG

let billA = [1, 2, 3, 4, 10];
let kA = 4;
let bA = 8;
bonAppetit(billA, kA, bA);

// fails at 100k items.