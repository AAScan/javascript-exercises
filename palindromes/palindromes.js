const palindromes = function(string) {
  let lowerCase = string.toLowerCase();
  let noSpaces = lowerCase.replace(/\s+/g, '');
  let noPunct = noSpaces.replace(/[.,\/#!$%\^&\*;:{}=\-_`~?()]/g,'');

  let newString = noPunct;

  let stringLength = newString.length;

  if (stringLength % 2 === 0) {
    let halfway = Math.ceil(stringLength/2);
    let firstHalf = newString.slice(0,halfway);

    let secondHalf = newString.slice(halfway);
    let secondHalfArray= secondHalf.split("");
    let reversedArray= secondHalfArray.reverse();
    let joinedString= reversedArray.join("");

    if (joinedString === firstHalf) {
      return true;
    } else {
      return false;
    }
  } else {
    let halfway = Math.ceil(stringLength/2);
    let firstHalf = newString.slice(0,halfway);
    let secondHalf = newString.slice(halfway-1);
    let secondHalfArray= secondHalf.split("");
    let reversedArray= secondHalfArray.reverse();
    let joinedString= reversedArray.join("");

    if (joinedString === firstHalf) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = palindromes
