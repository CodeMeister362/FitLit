class Sleep{
  constructor(data, userID) {
    this.data = data;
    this.userID = userID;
    this.userData = this.getUserData();
   
  }
  
  
getUserData() {
 return this.data.sleepData.filter((sleepObject) => sleepObject.userID === this.userID);
  }

getAllTimeSleepAve() {
  const totalHoursSlept = this.userData.reduce((acc, eachDay) => {
    acc += eachDay.hoursSlept;
      return acc 
    }, 0);
    return Math.round(totalHoursSlept / this.userData.length);
  };

  getAllTimeQualityAve = () => {
   
    let alltimeQuality = this.userData.reduce((acc, currentDay) => {
      acc += currentDay.sleepQuality;
      return acc
    }, 0);
    return Math.round(alltimeQuality / this.userData.length);
  };

  getHoursByDay(specificDate) {
    let sleepDay = this.userData.find(day => day.date === specificDate);
  
    if (sleepDay) {
      return sleepDay.hoursSlept;
    } else {
      return "Date not found"
    } 
  };

  getSleepQualityByDay = (specificDate) => {
    let qualityDay = this.userData.find(day => day.date === specificDate);
      if (qualityDay) {
        return qualityDay.sleepQuality;
      } else {
        return "Date not found"
      } 
  };

  getHoursSleptByWeek = (start, end) => {

  let sleepHoursWeek = this.userData.filter(day => day.date >= start && day.date <= end )

  return sleepHoursWeek
   
   
    // return hoursWeek.reduce((acc, item) => ({...acc, [item.date]: item.hoursSlept}), {});
  };

  getSleepQualitytByWeek = (givenID, start, end) => {
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





