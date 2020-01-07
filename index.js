// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  let length = drivers.length;
  return [drivers[length - 1], drivers[length - 2]].reverse();
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer;
  };
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
};

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(arrayOfDdrivers, chosenFunction) {
  return chosenFunction(arrayOfDdrivers);
}
