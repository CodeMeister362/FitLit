class UserRepository {
  constructor(users) {
    this.data = users
  };

  getUserData = (id) => {
    return this.data.userData.find((user) => user.id === id)  
  };

  getAverageSteps = () => {
    const steps = this.data.userData.reduce((acc, currentUser) => {
     acc += currentUser.dailyStepGoal
     return acc 
    }, 0)
        return Math.round(steps / this.data.userData.length)
  }
  getFirstName = (id) => {
    const fullName = this.data.userData.find((user) => user.id === id)
      return fullName.name.split(' ').shift()
  };
};

export default UserRepository;
