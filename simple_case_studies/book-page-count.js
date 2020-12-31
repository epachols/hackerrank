function pageCount(n, p) {
  // checking if p is first or last page
  if (p === 1 || p === n) return 0;

  // checking if last page is even and p is last - 1
  if (n % 2 === 0 && n - p === 1) return 1;

  // from left
  let leftcount = Math.floor(p / 2);
  //  from right
  let rightcount = Math.floor((n - p) / 2);

  if (leftcount <= rightcount) {
    return leftcount;
  } else return rightcount;
}

// this simple function counts the minimum number of page turns (from front to back) in a book of page number n, turned to page p, given that the pages are always numbered so that page 1 is on the righthand side of the book. notice the situation where the book has an even number of pages, but one is asked to find a page one from the end. there are easier ways to do this but I thought of the edge case after testing 26 other test cases positively, so I added it as an edge case handler.  In the future I would mathematically see if it is possible to do this in a smarter way, without the checks and evaluative measures.
