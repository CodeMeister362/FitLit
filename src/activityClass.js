class Activity {
  constructor(data, userData) {
    this.data = data
    this.userData = userData
  }
  getMilesWalked(givenId, date) {
    const userID = this.userData.users.find((userSpecific) => {
      return userSpecific.id === givenId
    })
    const userStrideLength = userID.strideLength
    const milesInADay = this.data.activityData.find(person => {
      return person.userID === givenId && person.date === date
    })
    let stepsOnly = milesInADay.numSteps
      stepsOnly = (stepsOnly * userStrideLength) / 63360
      return stepsOnly
  }
  getMinutesActive(givenId, date) {
    const daySelected = this.data.activityData.find((userDay) => {
    return userDay.userID === givenId && userDay.date === date
    })  
    const minutesActive = daySelected.minutesActive
    return minutesActive
  }
  determineReachGoal(givenId, date) {
    const specificUser = this.userData.users.find((person) => {
      return person.id === givenId
    })
    const dailyStepGoal = specificUser.dailyStepGoal
    const specificDay = this.data.activityData.find((person) => {
      return person.userID === givenId && person.date === date
    })
    const stepsOnly = specificDay.numSteps
    if (stepsOnly < dailyStepGoal) {
      const remainder = dailyStepGoal - stepsOnly
      return `You walked ${specificDay.numSteps} today. Thats ${remainder} steps below your goal of ${dailyStepGoal} steps!`
    } else if (stepsOnly >= dailyStepGoal) {
      return `You hit your step goal! You walked ${stepsOnly} steps out of your goal of ${dailyStepGoal} steps`
    }
  }
  overAWeek = (id, startDate, stopDate) => {
    let activityData = []
    const user = this.data.activityData.filter((item) => item.userID === id)
    user.forEach((item) => {
      if (item.date >= startDate && item.date <= stopDate)
        activityData.push(item)
    })
    const activityObject = activityData.reduce((acc, item) => ({...acc, [item.date]: item.minutesActive}),{})
    return activityObject
  }
}

export default Activity;
