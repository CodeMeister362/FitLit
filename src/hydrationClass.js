class Water{
  constructor(data) {
    this.data = data
  }
  averageOuncesPerDay(givenID) {
    let userNumOunces = this.data.hydrationData.filter((hydrationObject) => hydrationObject.userID === givenID)
    let average = userNumOunces.reduce((acc, currentDay) => {
      acc += currentDay.numOunces / userNumOunces.length
      return acc
    }, 0)
    average = Math.ceil(average)
    return average
  }
  getSpecificDay(givenID, givenDay) {
    const specificDayUser = this.data.hydrationData.find((hydrationData) => {
      return hydrationData.date === givenDay && hydrationData.userID === givenID
    })
    return specificDayUser.numOunces
  }

  overAWeek = (id, startDate, stopDate) => {
      let waterData = []
      const user = this.data.hydrationData.filter((item) => item.userID === id)
      user.forEach((item) => {
        if (item.date >= startDate && item.date <= stopDate)
          waterData.push(item)
      })
      return waterData.reduce((acc, item) => ({...acc, [item.date]: item.numOunces}),{})
    }
  }

export default Water;


