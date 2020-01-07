// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  let length = drivers.length;
  return [drivers[length - 1], drivers[length - 2]].reverse();
};

const selectingDrivers = function() {
  return [returnFirstTwoDrivers, returnLastTwoDrivers];
};
