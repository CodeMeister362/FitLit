import { assert } from 'chai';
import Water from '../src/WaterClass';


describe('Water Class', () => {

	let user1;
	let	user2;
	let	user3;
	let	users;
	let user1ArrayData;

	beforeEach(() => {
		user1 = new Water(1,"2023/03/24", 28);
		user2 = new Water(2,"2023/03/24", 35);
		user3 = new Water(2, "2023/03/24", 95);
		
		users = [user1, user2, user3]

		
	})

	it('should be a function', () => {
		assert.isFunction(Water)
	})

	it('should pass in user id', () => {
		assert.equal(user1.userID, 1)
	})

	it('should have a date', () => {
		assert.equal(user2.date, "2023/03/24")
	})

	it('should have ounces of water drank', () => {
		assert.equal(user3.numOunces, 95)
	})

	it('should find a user based off ID', () => {
		assert.deepEqual(user1.getUserData(1, users), user1)
	})

	it('For a user the average fluid ounces consumed per day for all time', () => {
		assert.deepEqual(user1.getFluidOuncesPerDay(1, user1ArrayData), 59.14)
	})
});
