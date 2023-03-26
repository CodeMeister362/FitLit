class UserRepository {
  constructor(id, name, address, email, strideLength) {
    this.id = id
    this.name = name
    this.address = address
    this.email = email
    this.strideLength = strideLength
  //   this.dailyStepGoal = details.dailyStepGoal
  //   this.friends = details.friends
  }
}


module.exports = UserRepository;