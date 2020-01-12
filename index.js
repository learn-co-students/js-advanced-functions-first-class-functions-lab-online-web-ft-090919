// Code your solution in this file!
const returnFirstTwoDrivers = function(rayOfDrivers){
    return rayOfDrivers.slice(0,2);
}

const returnLastTwoDrivers = function(rayOfDrivers){
    return rayOfDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(multiplyBy){
    return function(value){
        return multiplyBy * value;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers,whichDrivers){
    return whichDrivers(drivers);
}
