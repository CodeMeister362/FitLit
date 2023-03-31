class Activity {
	constructor(data, userData) {
		this.data = data
		this.userData = userData
	}

	getMilesWalked(givenId, date) {
		const userID = this.userData.find(person1 => {
			return person1.id === givenId 
		})
		const userStrideLength = userID.strideLength
		let milesInADay = this.data.activityData.find(person => {
			return person.userID === givenId && person.date === date
		})
		let stepsOnly = milesInADay.numSteps
			stepsOnly = (stepsOnly * 4) / userStrideLength
			return stepsOnly
	}

	getMinutesActive(givenId, date) {
		const userID = this.userData.find(person1 => {
			return person1.id === givenId 
		})	
		console.log(userID)
	}
}


export default Activity;