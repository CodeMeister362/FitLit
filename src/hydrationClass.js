class Water{
  constructor(data) {
    this.id = data.userID
    this.date = data.date
    this.numOunces = data.numOunces
  }
  averageOuncesPerDay(data, givenID) {
    let userNumOunces = data.hydrationData.filter((hydrationObject) => hydrationObject.userID === givenID)
    let average = userNumOunces.reduce((acc, currentDay) => {
      acc += currentDay.numOunces / userNumOunces.length
      return acc
    }, 0)
    average = Math.ceil(average)
    return average
  }
  getSpecificDay(data, givenID, givenDay) {
    const specificDayUser = data.hydrationData.find((hydrationData) => {
      return hydrationData.date === givenDay && hydrationData.userID === givenID
    })
    return specificDayUser.numOunces
  }

  overAWeek = (data, id, startDate, stopDate) => {
      let waterData = []
      const user = data.hydrationData.filter((item) => item.userID === id)
      user.forEach((item) => {
        if (item.date >= startDate && item.date <= stopDate)
          waterData.push(item)
      })
      return waterData.reduce((acc, item) => ({...acc, [item.date]: item.numOunces}),{})
    }
  }

export default Water;

