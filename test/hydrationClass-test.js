import { assert } from 'chai';
import Water from '../src/hydrationClass';
import data from '../src/data/hydrationmock';

describe('Hydration Class', () => {

let waterData = new Water(data.hydrationData)

it('should be a function', function() {

  assert.isFunction(Water)
})

it('should return the average ounces drank for a given user', function() {


  assert.equal(waterData.averageOuncesPerDay(1), 24)
})
  it('should return the amount drank based on specific day', function() {

    assert.equal(waterData.getSpecificDay(2, "2023/03/24"), 35)
  })
  it('should return the amount of water drank each day over a week', function() {

    assert.deepEqual(waterData.overAWeek(1, "2023/03/24", "2023/03/26"), {
      "2023/03/24" : 28,
      "2023/03/25" : 24,
      "2023/03/26" : 23
    })
  })
})