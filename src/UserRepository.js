class UserRepository {
  constructor(id, name, address, email, strideLength, dailyStepGoal, friends) {
    this.id = id
    this.name = name
    this.address = address
    this.email = email
    this.strideLength = strideLength
    this.dailyStepGoal = dailyStepGoal
    this.friends = friends
  }

  getUserData = (id, arr) => {
    const data = arr.find((user) => user.id === id)
    return data
  }

  getAverageSteps = () => {
    const steps = users.map((user) => user.dailyStepGoal)  
     
     const totalSteps = steps.reduce((curr, acc) => {
       return (acc + curr);
     }, 0)
       return Math.round(totalSteps / users.length)
     }
}


module.exports = UserRepository;