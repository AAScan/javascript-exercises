const fibonacci = function(n) {
  if (n<0){
    return "OOPS";
  } else {
    let startingPoint1=0;
    let startingPoint2=1;
    let fibonacciArray= [startingPoint2];
    for (let i=1; i<=n; i++) {
      let result = startingPoint1 + startingPoint2;
     startingPoint1 = startingPoint2;
      startingPoint2= result;
      fibonacciArray.push(result);
    }
    return fibonacciArray[n-1];
  }
}

module.exports = fibonacci
