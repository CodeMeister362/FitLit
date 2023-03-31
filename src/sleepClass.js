class Sleep{
  constructor(data, givenID) {
    this.id = data.userID
    this.date = data.date
    this.hoursSlept = data.hoursSlept
    this.sleepQuality = data.sleepQuality
  }
  
  averageSleepPerDay(data, givenID) {
    let userHoursSlept = data.filter((sleepObject) => sleepObject.userID === givenID)
    let average = userHoursSlept.reduce((acc, currentDay) => {
      acc += currentDay.hoursSlept / userHoursSlept.length
      return acc
    }, 0)
    return average
  }
};

// const averageSleep = (array, userId) => {
  
//   let userHoursSlept = array.filter((sleepObject) => sleepObject.userID === userId)
//   let average = userHoursSlept.reduce((acc, currentDay) => {
//     console.log(currentDay.hoursSlept)
//     acc += currentDay.hoursSlept / userHoursSlept.length
//     return acc
//   }, 0)
//      return average                               
//  }


export default sleepClass;





