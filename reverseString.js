const reverseString = (string) => {
  const splitString = string.split("");
  const reverseArray = splitString.reverse();
  const reverseStr = reverseArray.join("");
  return reverseStr;
} ;

module.exports = reverseString;
