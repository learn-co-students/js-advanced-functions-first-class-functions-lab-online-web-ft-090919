// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare){
  return function(multiplyer){
    return fare * multiplyer
  }

}

const fareDoubler = function(fare){
  return createFareMultiplier(fare)(2)
}

const fareTripler = function(fare){
  return createFareMultiplier(fare)(3)
}


function selectDifferentDrivers(drivers, func){
  return func(drivers)
}
