// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  let nArr = []
  for(let i = 0;  i <= 1; i++){
    nArr.push(drivers[i])
  }
  return nArr
}

const returnLastTwoDrivers = function(drivers){
  let nArr = []
  let i = drivers.length
  nArr.push(drivers[i-2] ,drivers[i-1])
  return nArr
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(integer){
  return function(value){
    return value * integer
  }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = function(driverSet,passedFunc){
  return passedFunc(driverSet)
  console.log(passedFunc)
  console.log(driverSet);
}
