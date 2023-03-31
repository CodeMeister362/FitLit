class Sleep{
  constructor(data) {
    this.data = data;
    // this.id = data.userID
    // this.date = data.date
    // this.hoursSlept = data.hoursSlept
    // this.sleepQuality = data.sleepQuality
  }
  getAllTimeSleepAve(givenID) {
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

  getSleepQualityByDay(givenID, date) {
    let sleepDay = this.data.sampleSleep.filter((sleepdata) =>
      sleepdata.userID === givenID && sleepdata.date === date)
      return sleepDay[0].sleepQuality;
    }

  getHoursSleptByWeek(givenID, start, end) {
   let hoursWeek = []
   const user = this.data.sampleSleep.filter((item) => item.userID === givenID);
   user.forEach((item) => {
    if (item.date >= start && item.date <= end) {
      hoursWeek.push(item)
    }
   });
    return hoursWeek.reduce((acc, item) => ({...acc, [item.date]: item.hoursSlept}), {});
  }
  getSleepQualitytByWeek(givenID, start, end) {
   let sleepQualityWeek = []
   const user = this.data.sampleSleep.filter((item) => item.userID === givenID);
   user.forEach((item) => {
    if (item.date >= start && item.date <= end) {
      sleepQualityWeek.push(item)
    }
   });
    return sleepQualityWeek.reduce((acc, item) => ({...acc, [item.date]: item.sleepQuality}), {});
  }
};


export default Sleep;





