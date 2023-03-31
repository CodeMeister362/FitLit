class Water{
  constructor(data) {
    //this.data = data
    this.id = data.userID
    this.date = data.date
    this.numOunces = data.numOunces
  }
  averageOuncesPerDay(data, givenID) {
    console.log('what is this', this.data)
    let userNumOunces = data.filter((hydrationObject) => hydrationObject.userID === givenID)
    let average = userNumOunces.reduce((acc, currentDay) => {
      acc += currentDay.numOunces / userNumOunces.length
      return acc
    }, 0)
    average = Math.ceil(average)
    return average
  }
  getSpecificDay(data, givenID, givenDay) {
    const specificDayUser = data.find((hydrationData) => {
      return hydrationData.date === givenDay && hydrationData.userID === givenID
    })
    return specificDayUser.numOunces
  }

  overAWeek = (data, id, startDate, stopDate) => {
      let waterData = []
      const user = data.filter((item) => item.userID === id)
      user.forEach((item) => {
        if (item.date >= startDate && item.date <= stopDate)
          waterData.push(item)
      })
      return waterData.reduce((acc, item) => ({...acc, [item.date]: item.numOunces}),{})
    }
  }

export default Water;


