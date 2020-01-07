const returnFirstTwoDrivers = arr => arr.slice(0, 2)

const returnLastTwoDrivers = arr => arr.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return fare => fare * int
}

const fareDoubler = fare => createFareMultiplier(2)(fare)

const fareTripler = fare => createFareMultiplier(3)(fare)

selectDifferentDrivers = (arr, fn) => fn(arr)