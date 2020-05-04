const removeFromArray = function() {
  let noOfArguments = arguments.length;
  let newArray= arguments[0];
  let result;

  for (let i=1;i<noOfArguments;i++) {
    let removeThis= arguments[i];
    let isItPresent= newArray.indexOf(removeThis);

    console.log(isItPresent);

    if (isItPresent===(-1)) {
    result = newArray;
    continue;
    }
    else {
    newArray.splice(newArray.indexOf(removeThis), 1);
    result = newArray;
    }
  }

  return result;
}


module.exports = removeFromArray
