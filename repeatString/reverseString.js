const reverseString = function(string) {

  let stringLength= string.length;
  let newArray= [];
  let stringArray= string.split("");

  for (let i=0; i<stringLength; i++) {
    let entry = stringArray[i];
    newArray.splice(0,0,entry);
  }

  let newStringWithCommas= newArray.toString();
  let newString= newStringWithCommas.replace(/,/g,"");
  return newString;
}

module.exports = reverseString
