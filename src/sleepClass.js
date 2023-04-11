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
    const qualityDay = this.userData.find(day => day.date === specificDate);
      if (qualityDay) {
        return qualityDay.sleepQuality;
      } else {
        return "Date not found"
      } 
  };

  getHoursSleptByWeek = (start, end) => {

   const datesByWeek = this.userData.reduce((acc, day) => {
    if(day.date >= start && day.date <= end) {
      acc[day.date] = day.hoursSlept
    }
    return acc
  }, {})
    if ( Object.keys(datesByWeek).length < 1 ) {
      return "Dates not found."
    } else {
      return datesByWeek;
    }
  };


  getSleepQualitytByWeek = (start, end) => {
  
   const sleepQualityWeek = this.userData.reduce((acc, day) => {
    if(day.date >= start && day.date <= end) {
      acc[day.date] = day.sleepQuality
    }
    return acc
   }, {})
   if ( Object.keys(sleepQualityWeek).length < 2 ) {
      return "Dates not found."
    } else {
      return sleepQualityWeek;
    }
  };
};

export default Sleep;





