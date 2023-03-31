import { assert } from 'chai';
import Sleep from '../src/sleepClass';
import sampleSleepData from './sleep-mock-data';

describe("Sleep Class", () => {

let sleepData = new Sleep(sampleSleepData);
console.log("TEst", sleepData)
  // beforeEach(() => {
  
  //   console.log("TEst", sleepData)
  // });

  it("should calculate the ave hours a usser has slept for all time", function() {
    assert.equal(sleepData. getAllTimeSleepAve(1), 7)
  });

it("should calculate the average sleep quality for all time", function() {
    assert.equal(sleepData.getAllTimeQualityAve(1), 4)
  });

});


// --All Time: ave number of hours slept 
// All Time ave quality / day over all time
// Specific Day: hours slept 
// Specific Day: sleep quality 
// Week: hours slept
// Week: sleep quality each day over the course of a given week (7