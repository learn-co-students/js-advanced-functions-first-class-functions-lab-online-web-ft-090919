// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
    return arr.slice(0, 2)
}

const returnLastTwoDrivers = function (arr) {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (fare) {
    return function (integer) {
        return fare * integer
    }
}

function fareDoubler (fare) {
    return createFareMultiplier(fare)(2)
}

function fareTripler (fare) {
    return createFareMultiplier(fare)(3)
}

function selectDifferentDrivers (drivers, driversFunction) {
    return driversFunction(drivers)
}