class Water {
	constructor(userId, date, numOunces) {
		this.userID = userId
		this.date = date
		this.numOunces = numOunces
	}
	
	getUserData(id, users) {
		return users.find(user => user.userID === id)
	}

	
	getFluidOuncesPerDay(id, array) {
	 const arrayID = array.filter(user => {
			return user.userID === id
		})
		const sumOunces = arrayID.reduce((acc, cv) => {
			acc += cv.numOunces
			return acc
		},0)
		 
		// console.log(sumOunces)
	}
	
}


export default Water;