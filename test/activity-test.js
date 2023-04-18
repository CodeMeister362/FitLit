import { assert } from 'chai';
import Activity from '../src/activityClass';
import activityMockData from '../src/data/activity-mock-data';
import userMockData from '../src/data/user-mock-data';

describe('activity class', () => {

	let activity;
	
	beforeEach(() => {
	
		activity = new Activity(activityMockData, userMockData)

	})
		it('should be a function', () => {
			assert.isFunction(Activity)
		});

		it('should return the data from a specific day based on ID and date', () => {
			assert.deepEqual(activity.getSpecificDayData(1, "2023/03/27"), 
			{
				"userID": 1,
				"date": "2023/03/27",
				"numSteps": 7362,
				"minutesActive": 261,
				"flightsOfStairs": 26
				})
				assert.equal(activity.getSpecificDayData(1, "2023/03/30"), undefined)
				assert.equal(activity.getSpecificDayData(8, "2023/03/27"), undefined)		
		});

		it('should return the data from a specific date range based on ID and date', () => {
			assert.deepEqual(activity.getSpecificRangeData(1, "2023/03/26", "2023/03/27"), 
			[{
			"userID": 1,
			"date": "2023/03/26",
			"numSteps": 7362,
			"minutesActive": 261,
			"flightsOfStairs": 26
			},
			{
			"userID": 1,
			"date": "2023/03/27",
			"numSteps": 7362,
			"minutesActive": 261,
			"flightsOfStairs": 26
			}])
			assert.deepEqual(activity.getSpecificRangeData(1, "2023/03/28", "2023/03/29"), [])
			assert.deepEqual(activity.getSpecificRangeData(8, "2023/03/26", "2023/03/27"), [])		
		});

		it('should return miles walked in day based on if date exists in data', () => {
			assert.equal(activity.getMilesWalked(1, "2023/03/24"), .5)
			assert.equal(activity.getMilesWalked(8, "2023/03/24"), undefined)
			assert.equal(activity.getMilesWalked(1, "2027/03/24"), undefined)
		});

		it('should return minutes active in a day based on if date exists in data', () => {
			assert.equal(activity.getMinutesActive(2, "2023/03/24"), 125)
			assert.equal(activity.getMinutesActive(2, "2028/03/24"), undefined)
			assert.equal(activity.getMinutesActive(8, "2023/03/24"), undefined)
		}); 

		it('should tell user if they have met their step goal for the day if date exists in data', () => {
			assert.equal(activity.determineReachGoal(2, "2023/03/24"),`You walked 3049 steps today. That's 5951 steps below your goal of 9000 steps.`)
			assert.equal(activity.determineReachGoal(3, "2023/03/24"),'You walked 12970 steps today. Thats 9970 steps above your goal of 3000 steps!')
			assert.equal(activity.determineReachGoal(3, "2026/03/24"), undefined)
			assert.equal(activity.determineReachGoal(8, "2023/03/24"), undefined)
		});

		it('should return activity from a week if dates exist in data', () => {
			assert.deepEqual(activity.overAWeek(1, "2023/03/24", "2023/03/27"), 
			{
				'2023/03/24': 261,
				'2023/03/25': 261,
				'2023/03/26': 261,
				'2023/03/27': 261
			})
			assert.deepEqual(activity.overAWeek(1, "2028/03/24", "2028/03/27"), {})
			assert.deepEqual(activity.overAWeek(8, "2023/03/24", "2023/03/27"), {})
		});

    it('should rerturn miles walked', () => {
      assert.equal(activity.getAllMilesWalked(1), 1.9)
      assert.equal(activity.getAllMilesWalked(3), 2.2)

      assert.equal(activity.getAllMilesWalked(5), undefined)
    });

    it('should return percentage for users goal acheivments', () => {
      assert.equal(activity.getPercentGoalsMet(1), 
      `In the last 4 days you've met your step goal 100% of the time and walked`
      )
      assert.equal(activity.getPercentGoalsMet(2), 
      `In the last 4 days you've met your step goal 75% of the time and walked`
      )
			
      assert.equal(activity.getPercentGoalsMet(5), undefined)
    });
});

