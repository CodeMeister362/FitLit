import { assert } from 'chai';
import Sleep from '../src/sleepClass';
import sampleSleepData from './sleep-mock-data';


describe("Sleep Class", () => {
  let mockSleep;
 beforeEach(() => {

    mockSleep = new Sleep(sampleSleepData, 1);

  });

  it("should calculate the ave hours a usser has slept for all time", function() {
    assert.equal(mockSleep.getAllTimeSleepAve(), 7)
  });

  it("should calculate the average sleep quality for all time", function() {
    assert.equal(mockSleep.getAllTimeQualityAve(), 4)
  });

  it("should take in a specific day and return the users hours slept for that date", function() {

  assert.equal(mockSleep.getHoursByDay("2023/03/24"), 9.6);
  assert.equal(mockSleep.getHoursByDay("2021/06/22"), "Date not found");
  })

  it("should take in a specific day and return the users sleep quality for that date", function() {

  assert.equal(mockSleep.getSleepQualityByDay("2023/03/24"), 4.3)
  })


  it("should return hours slept for each day over 7 days", function() {
    assert.deepEqual(mockSleep.getHoursSleptByWeek("2023/03/24", "2023/03/30"), {
    "2023/03/24" : 9.6,
    "2023/03/25" : 6.3,
    "2023/03/26" : 5.4,
    "2023/03/27" : 7.1,
    "2023/03/28" : 6,
    "2023/03/29" : 5.6,
    "2023/03/30" : 6.2,
    })
  });



it("should return sleep quality for each day over 7 days", function() {
    assert.deepEqual(mockSleep.getSleepQualitytByWeek(1, "2023/03/24", "2023/03/30"), {
    "2023/03/24" : 4.3,
    "2023/03/25" : 3.3,
    "2023/03/26" : 3.1,
    "2023/03/27" : 4.7,
    "2023/03/28" : 4.6,
    "2023/03/29" : 2.1,
    "2023/03/30" : 3.3,
    })
  });
});