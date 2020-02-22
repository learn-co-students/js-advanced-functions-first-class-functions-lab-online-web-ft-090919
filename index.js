// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiplier) { 
    return (value) => multiplier * value;
}
//const fareDoubler = (fare) => fare * 2;
function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

const selectDifferentDrivers = (drivers, selectFunc) => selectFunc(drivers);
