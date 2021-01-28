function isPalindrome(string) {
  if (string.length === 1) return true;
  let left = string[0];
  let right = string[string.length - 1];
  if (right !== left) return false;
  let modString = string.substring(1, string.length - 1);
  return isPalindrome(modString);
}

//the aforementioned recursive version uses the call stack rather than a single iteration
