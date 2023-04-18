class UserRepository {
  constructor(users) {
    this.data = users
  };

  getUserData = (id) => {
    return this.data.users.find((user) => user.id === id)  
  };

  getAverageSteps = () => {
    const steps = this.data.users.reduce((acc, currentUser) => {
     acc += currentUser.dailyStepGoal
     return acc 
    }, 0)
    return Math.round(steps / this.data.users.length)
  }

  getFirstName = (id) => {
    const fullName = this.data.users.find((user) => user.id === id)
    if (fullName) {
      return fullName.name.split(' ').shift()
    }
  };
};

export default UserRepository;