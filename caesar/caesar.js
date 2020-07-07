const caesar = function(string,change) {
  let result = "";

  for (let i=0;i<string.length;i++){

    let char = string[i];
    let charCode = char.charCodeAt();
    let newChange = change % 26;
    let adjustCode = charCode + newChange;

    //If it is a capital letter
    if (charCode > 64 && charCode < 91) {
      if (adjustCode < 65) {
       let newCharCode = charCode + 26;
       let newLetter = String.fromCharCode(newCharCode + newChange);
       result += newLetter;
      }
      else if (adjustCode > 90) {
        let newCharCode = charCode - 26;
        let newLetter = String.fromCharCode(newCharCode + newChange);
        result += newLetter;
      } else {
        let newLetter = String.fromCharCode(adjustCode);
        result += newLetter;
      }
    }

    //If it is a lowercase letter
    else if (charCode > 96 && charCode < 123) {
      if (adjustCode < 97) {
       let newCharCode = charCode + 26;
       let newLetter = String.fromCharCode(newCharCode + newChange);
       result += newLetter;
      }
      else if (adjustCode > 122){
        let newCharCode = charCode - 26;
        let newLetter = String.fromCharCode(newCharCode + newChange);
        result += newLetter;
      } else {
        let newLetter = String.fromCharCode(adjustCode);
        result += newLetter;
      }
    }
    //If it is not a letter
    else {
      result += string[i];
    }
  }
return result;
}

module.exports = caesar;
