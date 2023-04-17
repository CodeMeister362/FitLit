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

  getAllMilesWalked = (givenId) => {
   const specificUser = this.data.users.find((user) => user.id === givenId)
   const specificUserStrideLength = specificUser.strideLength
   const usersSteps = this.activity.activityData.filter(day => day.userID === givenId ) 
   const allSteps = usersSteps.reduce((acc, day) => {
            acc += day.numSteps         
      return acc
    }, 0)  
    return (Math.round((allSteps * specificUserStrideLength / 63360) * 10) / 10);
    } 
  
  getPercentGoalsMet = (givenId) => {
      const specificUser = this.data.users.find((user) => {
        return user.id === givenId
      }) 
      const specificUserStepGoal = specificUser.dailyStepGoal
      const usersData = this.activity.activityData.filter(day => day.userID === givenId ) 
      const totalDays = usersData.length;

      const daysMet = usersData.reduce((acc, day) => {
        if ( day.numSteps >= specificUserStepGoal) {
          acc += 1
      }
      return acc
   }, 0)

  const percentMet = (daysMet / totalDays) * 100; 

  return(`In the last ${totalDays} days you've met your step goal ${percentMet.toFixed(0)}% of the time and walked`);
  
  }
}
export default Activity;

