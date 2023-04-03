import { assert } from 'chai';
import Activity from '../src/activityClass';

describe('activity class', () => {

	let activity;
	
	beforeEach(() => {
	
			activity = new Activity({
				"activityData": [
				{
				"userID": 1,
				"date": "2023/03/24",
				"numSteps": 7362,
				"minutesActive": 261,
				"flightsOfStairs": 26
				},
				{
				"userID": 2,
				"date": "2023/03/24",
				"numSteps": 3049,
				"minutesActive": 125,
				"flightsOfStairs": 43
				},
				{
				"userID": 3,
				"date": "2023/03/24",
				"numSteps": 12970,
				"minutesActive": 282,
				"flightsOfStairs": 38
				},
				{
					"userID": 1,
					"date": "2023/03/24",
					"numSteps": 7362,
					"minutesActive": 261,
					"flightsOfStairs": 26
					},
					{
					"userID": 2,
					"date": "2023/03/25",
					"numSteps": 9000,
					"minutesActive": 125,
					"flightsOfStairs": 43
					},
					{
					"userID": 3,
					"date": "2023/03/24",
					"numSteps": 12970,
					"minutesActive": 282,
					"flightsOfStairs": 38
					},
					{
						"userID": 1,
						"date": "2023/03/24",
						"numSteps": 7362,
						"minutesActive": 261,
						"flightsOfStairs": 26
						},
						{
						"userID": 2,
						"date": "2023/03/26",
						"numSteps": 10000,
						"minutesActive": 125,
						"flightsOfStairs": 43
						},
						{
						"userID": 3,
						"date": "2023/03/24",
						"numSteps": 12970,
						"minutesActive": 282,
						"flightsOfStairs": 38
						}
			]},
				{ "users": [
				{
					"id": 1,
					"name": "Trystan Gorczany",
					"address": "9484 Lucas Flat, West Kittymouth WA 67504",
					"email": "Taurean_Pollich31@gmail.com",
					"strideLength": 4,
					"dailyStepGoal": 7000,
					"friends": [
						5,
						43,
						46,
						11
					]
				},
				{
					"id": 2,
					"name": "Tyreek VonRueden",
					"address": "623 Koelpin Skyway, Lake Luigichester MN 77576-1678",
					"email": "Nicolette_Halvorson43@yahoo.com",
					"strideLength": 4.5,
					"dailyStepGoal": 9000,
					"friends": [
						13,
						19,
						3
					]
				},
				{
					"id": 3,
					"name": "Colt Rohan",
					"address": "48010 Balistreri Harbor, Cleobury IN 43317",
					"email": "Wilford.Barton@gmail.com",
					"strideLength": 2.7,
					"dailyStepGoal": 3000,
					"friends": [
						31,
						16,
						15,
						7
					]
			}]
		});
	});

		it('should be a function', () => {
			assert.isFunction(Activity)
		});

		it('should return miles walked in day', () => {
			assert.equal(activity.getMilesWalked(1, "2023/03/24"), .4647727272727273)
		});

		it('should return minutes active in a day', () => {
			assert.equal(activity.getMinutesActive(2, "2023/03/24"), 125)
		}); 

		it('should tell user if they have met their step goal for the day', () => {
			assert.equal(activity.determineReachGoal(2, "2023/03/24"),'You were 5951 steps below your goal of 9000 steps!')
			assert.equal(activity.determineReachGoal(2, "2023/03/25"),'You hit your step goal! You walked 9000 steps out of your goal of 9000 steps')
		});
});
