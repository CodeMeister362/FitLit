class Activity {
  constructor(activityData, userData) {
    this.activity = activityData
    this.data = userData
  };

  getSpecificDayData = (givenId, date) => {
    return this.activity.activityData.find((data) => {
      return data.userID === givenId && data.date === date
    })
  }

  getSpecificRangeData = (givenId, startDate, stopDate) => {
    const filtered = this.activity.activityData.filter((data) => {
      return data.userID === givenId && data.date >= startDate && data.date <= stopDate
    })
    return filtered
  }
  
  getMilesWalked = (givenId, date) => {
    const specificDayData = this.getSpecificDayData(givenId, date);
    const specificUser = this.data.users.find((user) => {
      return user.id === givenId
    }) 
    if (specificDayData && specificUser) {
      const specificUserStrideLength = specificUser.strideLength
      const specificDaySteps = this.getSpecificDayData(givenId, date).numSteps
      return Math.round((specificDaySteps * specificUserStrideLength / 63360) * 10) / 10
    }
  }

  getMinutesActive = (givenId, date) => {
    const data = this.getSpecificDayData(givenId, date);
    if (data){
      const specificUser = this.activity.activityData.find((data) => {
        return data.date === date && data.userID === givenId
      })
      return specificUser.minutesActive
    } 
  }

  determineReachGoal = (givenId, date) => {
    const data = this.getSpecificDayData(givenId, date);
    if (data) {
      const specificUser = this.data.users.find((user) => {
        return user.id === givenId
      }) 
      const specificUserStepGoal = specificUser.dailyStepGoal
      const specificDaySteps = this.getSpecificDayData(givenId, date).numSteps

      if(specificUserStepGoal > specificDaySteps) {
        return `You walked ${specificDaySteps} steps today. That's ${specificUserStepGoal - specificDaySteps} steps below your goal of ${specificUserStepGoal} steps.`
      } else if(specificDaySteps > specificUserStepGoal) {
        return (`You walked ${specificDaySteps} steps today. Thats ${specificDaySteps - specificUserStepGoal} steps above your goal of ${specificUserStepGoal} steps!`)
      }
    } 
  };

  overAWeek = (givenId, startDate, stopDate) => {
    let data = this.getSpecificRangeData(givenId, startDate, stopDate);
    const userObject = data.reduce((acc, currentData) => {
      acc[currentData.date] = currentData.minutesActive
      return acc
    }, {})
    return userObject
  }
};

export default Activity;
