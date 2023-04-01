class Sleep{
  constructor(data) {
    this.data = data;
  }
  getAllTimeSleepAve(givenID) {
    let userHoursSlept = this.data.sleepData.filter((sleepObject) => sleepObject.userID === givenID)
    let average = userHoursSlept.reduce((acc, currentDay) => {
      acc += currentDay.hoursSlept / userHoursSlept.length
      return acc
    }, 0)
    return Math.round(average);
  };

  getAllTimeQualityAve(givenID) {
    let allTimeQuality = this.data.
sleepData.filter((sleepObject) => 
    sleepObject.userID === givenID)
    let alltimeAveQuality = allTimeQuality.reduce((acc, currentDay) => {
      acc += currentDay.sleepQuality / allTimeQuality.length
      return acc
    }, 0);
    return Math.round(alltimeAveQuality);
  };

  getHoursByDay(givenID, date) {
    let sleepDay = this.data.sleepData.filter((sldata) =>
      sldata.userID === givenID && sldata.date === date)
      return sleepDay[0].hoursSlept;
    }

  getSleepQualityByDay(givenID, date) {
    let sleepQuality = this.data.sleepData.filter((sleepdata) =>
      sleepdata.userID === givenID && sleepdata.date === date)
      return sleepQuality[0].sleepQuality;
    }

  getHoursSleptByWeek(givenID, start, end) {
   let hoursWeek = []
   const user = this.data.sleepData.filter((item) => item.userID === givenID);
   user.forEach((item) => {
    if (item.date >= start && item.date <= end) {
      hoursWeek.push(item)
    }
   });
    return hoursWeek.reduce((acc, item) => ({...acc, [item.date]: item.hoursSlept}), {});
  }

  getSleepQualitytByWeek(givenID, start, end) {
   let sleepQualityWeek = [];
   const user = this.data.sleepData.filter((item) => item.userID === givenID);
   user.forEach((item) => {
    if (item.date >= start && item.date <= end) {
      sleepQualityWeek.push(item)
    }
   });
    return sleepQualityWeek.reduce((acc, item) => ({...acc, [item.date]: item.sleepQuality}), {});
  }
};

export default Sleep;





