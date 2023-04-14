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

  checkDateExists = (date) => {
    return this.activity.activityData.some((data) => {
      return data.date === date 
  })
}

  getMilesWalked = (givenId, date) => {
    if(this.checkDateExists(date)) {
      const specificUser = this.data.users.find((user) => {
        return user.id === givenId
      }) 
      const specificUserStrideLength = specificUser.strideLength
      
      const specificDaySteps = this.getSpecificDayData(givenId, date).numSteps
      return Math.round((specificDaySteps * specificUserStrideLength / 63360) * 10) / 10
    } else {
    // console.log('this day doesnt exist!')
    return 'this day doesnt exist!'
  }
  }

  getMinutesActive = (givenId, date) => {
    if(this.checkDateExists(date)) {
      const specificUser = this.activity.activityData.find((data) => {
        return data.date === date && data.userID === givenId
      })
      return specificUser.minutesActive
    } else {
      // console.log('this day doesnt exist!')
      return 'this day doesnt exist!'
    }
  }

  determineReachGoal = (givenId, date) => {
    if(this.checkDateExists(date)) {
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
    } else {
      return 'this day doesnt exist!'
    }
  };

  overAWeek = (id, startDate, stopDate) => {
    if (this.activity.activityData.some((data) => { 
      return data.date >= startDate && data.date <= stopDate
    })) {
      const userDates = this.activity.activityData.filter((data) => {
        return data.userID === id && data.date >= startDate && data.date <= stopDate
      })
      const userObject = userDates.reduce((acc, currentData) => {
          acc[currentData.date] = currentData.minutesActive
        return acc
      },{})
      return userObject
    } else {
      return 'wrongDates!'
    }
  };
}

export default Activity;
