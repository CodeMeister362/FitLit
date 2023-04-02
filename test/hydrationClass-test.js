import { assert } from 'chai';
import Water from '../src/hydrationClass';
import data from '../src/data/hydrationmock';

describe('Hydration Class', () => {

  let waterData = new Water(data)

  it.skip('should be a function', () => {
    assert.isFunction(Water)
  });

  it.skip('should return the average ounces drank for a given user', () => {
    assert.equal(waterData.averageOuncesPerDay( 1), 24)
  });

  it.skip('should return the amount drank based on specific day', () => {
    assert.equal(waterData.getSpecificDay( 2, "2023/03/24"), 35)
  });

  it.skip('should return the amount of water drank each day over a week', () => {
    assert.deepEqual(waterData.overAWeek( 1, "2023/03/24", "2023/03/26"), {
      "2023/03/24" : 28,
      "2023/03/25" : 24,
      "2023/03/26" : 23
      });
  });
});