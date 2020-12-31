// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
  if (year === 1918) {
    return `26.09.1918`;
  } else if (year < 1918) {
    if (year % 4 === 0) {
      return `12.09.${year}`;
    } else return `13.09.${year}`;
  } else if (year > 1918) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      return `12.09.${year}`;
    } else return `13.09.${year}`;
  }
}

// a student mary wants to travel through time to the day of the programmer on different years in russia, only catch is, in 1918 russia skipped to feb 14th right after jan 31 to shift the calendar from julian to gregorian... which means of course, our day of the programmer is off. Set up the conditional checks to return the right datestring for day of the programmer based on input.
