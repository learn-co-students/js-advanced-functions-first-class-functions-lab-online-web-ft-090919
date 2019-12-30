const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length - 2, drivers.length);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(arg) {
  return function(fare) {
    return fare * arg;
  };
}

const fareDoubler = function(fare) {
  let fD = createFareMultiplier(2);
  return fD(fare);
};

const fareTripler = function(fare) {
  let fT = createFareMultiplier(3);
  return fT(fare);
};

function selectDifferentDrivers(drivers, unknownFunction) {
  return unknownFunction(drivers);
}
