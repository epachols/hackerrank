// Complete the libraryFine function below. given the (1 = date returned, 2 = date due) calculate the fine due. note - only the least accurate version of measurement is to be used. (very simple, accounts for no mathematical overlap between days, months, and years in caculations)

//edge case identification exercise, pure and simple. what are all the likely outcomes of this? not difficult, just makes you think about if you are missing anything! best to write down your options as you walk through.
function libraryFine(d1, m1, y1, d2, m2, y2) {
  let yDiff = y1 - y2; // + , - , 0
  let mDiff = m1 - m2; // +, -, 0
  let dDiff = d1 - d2; // +, -, 0

  if (yDiff < 0 || (yDiff === 0 && mDiff < 0)) {
    return 0;
  } // handles y only '-', and m only '-',
  else {
    return yDiff > 0
      ? 10000
      : mDiff > 0
      ? mDiff * 500
      : dDiff > 0
      ? dDiff * 15
      : 0;
  } //handles all + and 0 cases via comparison.
}

libraryFine(28, 2, 2015, 15, 4, 2015); //0

// if stuck doing comparisons by chain, it's important to take a look at being really explicit in handling all cases. THINK about pos, neg, and infinite cases every time you do a problem. take into account the constraints, and what they could mean, before you begin coding. you will be better at handling edge cases as they come up, or at least flagging them mid-process to address, that at least lets the hiring professional know that you are accounting for the edge cases, even if you haven't solved them yet.
