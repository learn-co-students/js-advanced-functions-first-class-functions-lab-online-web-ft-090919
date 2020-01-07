// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  const innerFunction = function(drivers) {
    return [drivers[0], drivers[1]];
  };
  return innerFunction;
}
console.log(returnFirstTwoDrivers(["first", "second", "third"]));
