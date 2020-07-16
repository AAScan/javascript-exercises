function getAge(dob,dod) {
  if (dod === undefined) {
    let now = new Date();
    dod = now.getFullYear();
  }
  let age = dod - dob;
  return age;
}

let findTheOldest = function(array) {
  return array.reduce(function (currentOldest, currentPerson) {
    const oldestAge = getAge(currentOldest.yearOfBirth,currentOldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth,currentPerson.yearOfDeath);
    if (currentAge > oldestAge) {
      return currentPerson;
    }
    else {
      return currentOldest;
    }
  });
}

module.exports = findTheOldest
