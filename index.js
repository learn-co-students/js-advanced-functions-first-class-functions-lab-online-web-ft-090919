// Code your solution in this file!

const returnFirstTwoDrivers = (array) => {return array.slice(0, 2)}

const returnLastTwoDrivers = (array) => {
    const array2 = [...array]
    return array2.reverse().slice(0,2).reverse()
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return (arg=4) => {return arg * num}
}

const fareDoubler = (fare) => {return createFareMultiplier(fare)(2)}

const fareTripler = (fare) => {return createFareMultiplier(fare)(3)}

function selectDifferentDrivers(drivers, driverSelect){
    return driverSelect(drivers)
}