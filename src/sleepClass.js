class Sleep{
  constructor(data) {
    this.data = data;
    // this.id = data.userID
    // this.date = data.date
    // this.hoursSlept = data.hoursSlept
    // this.sleepQuality = data.sleepQuality
  }
  getAllTimeSleepAve(givenID) {
    console.log("This.data class", 
    this.data);
    let userHoursSlept = this.data.sampleSleep.filter((sleepObject) => sleepObject.userID === givenID)
    let average = userHoursSlept.reduce((acc, currentDay) => {
      acc += currentDay.hoursSlept / userHoursSlept.length
      return acc
    }, 0)
    return Math.round(average);
  };

  getAllTimeQualityAve(givenID) {
    let allTimeQuality = this.data.sampleSleep.filter((sleepObject) => 
    sleepObject.userID === givenID)
    let alltimeAveQuality = allTimeQuality.reduce((acc, currentDay) => {
      acc += currentDay.sleepQuality / allTimeQuality.length
      return acc
    }, 0);
    return Math.round(alltimeAveQuality);
  };

  getHoursByDay(givenID, date) {
    let sleepDay = this.data.sampleSleep.filter((sleepdata) =>
      sleepdata.userID === givenID && sleepdata.date === date)
      return sleepDay[0].hoursSlept;
    
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


export default Sleep;





