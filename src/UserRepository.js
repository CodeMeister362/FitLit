class UserRepository {
  constructor(details) {
    this.id = details.id
    this.name = details.name
    this.address = details.address
    this.email = details.email
    this.strideLength = details.strideLength
    this.dailyStepGoal = details.dailyStepGoal
    this.friends = details.friends
  }
}


module.exports = UserRepository;