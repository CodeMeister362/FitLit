class User {
  constructor (details) {
    this.id = details.id
    this.name = details.name
    this.address = details.address
    this.email = details.email
    this.strideLength = details.strideLength || 0
    this.dailyStepGoal = details.dailyStepGoal || 0
    this.friends = []
  }
}

module.exports = User;