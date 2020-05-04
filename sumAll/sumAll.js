const sumAll = function(beginning,end) {
  let finalSum= 0;

  if (typeof beginning !== "number" || typeof end !== "number"||(beginning<0)||(end<0)) {
    return 'ERROR';
  }

  else {
      if (end>=beginning){
        for (let i=beginning; i<(end+1); i++) {
          let toAdd=i;
          finalSum+= toAdd;
          }
      }

      else {
        for (let i=end; i<(beginning+1); i++) {
          let toAdd=i;
          finalSum+= toAdd;
          }
      }

    return finalSum;
  }
}

module.exports = sumAll
