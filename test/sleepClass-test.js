import { assert } from 'chai';
import Sleep from '../src/sleepClass';
import sampleSleepData from './sleep-mock-data';


<<<<<<< HEAD
describe("Sleep Class", () => {
  let mockSleep;
 beforeEach(() => {
    // mockSleep = new Sleep({sampleSleepData: sampleSleep});
    mockSleep = new Sleep(sampleSleepData);


  });

  it("should calculate the ave hours a usser has slept for all time", function() {
    assert.equal(mockSleep.getAllTimeSleepAve(1), 7)
  });

  it("should calculate the average sleep quality for all time", function() {
    
    assert.equal(mockSleep.getAllTimeQualityAve(1), 4)
  });

  it("should take in a specific day and return the users hours slept for that date", function() {

  assert.equal(mockSleep.getHoursByDay(2, "2023/03/24"), 8.4)
  })

  it("should take in a specific day and return the users sleep quality for that date", function() {

  assert.equal(mockSleep.getSleepQualityByDay(2, "2023/03/24"), 3.5)
  })

  it("should return hours slept for each day over 7 days", function() {
    assert.deepEqual(mockSleep.getHoursSleptByWeek(1, "2023/03/24", "2023/03/30"), {
    "2023/03/24" : 9.6,
    "2023/03/25" : 6.3,
    "2023/03/26" : 5.4,
    "2023/03/27" : 7.1,
    "2023/03/28" : 6,
    "2023/03/29" : 5.6,
    "2023/03/30" : 6.2,
    })
=======
  let sleepData = new Sleep(sampleSleepData);

  it("should calculate the ave hours a usser has slept for all time", () => {
    assert.equal(sleepData.getAllTimeSleepAve(1), 7)
  });

  it("should calculate the average sleep quality for all time", () => {
    assert.equal(sleepData.getAllTimeQualityAve(1), 4)
  });

  it("should take in a specific day and return the users hours slept for that date", () => {
    assert.equal(sleepData.getHoursByDay(2, "2023/03/24"), 8.4)
>>>>>>> main
  });

  it("should take in a specific day and return the users sleep quality for that date", () => {
    assert.equal(sleepData.getSleepQualityByDay(2, "2023/03/24"), 3.5)
  });

<<<<<<< HEAD
  assert.equal(mockSleep.getSleepQualityByDay(2, "2023/03/24"), 3.5)
  })

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
  })
=======
  it("should return hours slept for each day over 7 days", () => {
    assert.deepEqual(sleepData.getHoursSleptByWeek(1, "2023/03/24", "2023/03/30"), {
      "2023/03/24" : 9.6,
      "2023/03/25" : 6.3,
      "2023/03/26" : 5.4,
      "2023/03/27" : 7.1,
      "2023/03/28" : 6,
      "2023/03/29" : 5.6,
      "2023/03/30" : 6.2,
    });
  });

  it("should take in a specific day and return the users sleep quality for that date", () => {
    assert.equal(sleepData.getSleepQualityByDay(2, "2023/03/24"), 3.5)
    });

  it("should return sleep quality for each day over 7 days", () => {
    assert.deepEqual(sleepData.getSleepQualitytByWeek(1, "2023/03/24", "2023/03/30"), {
      "2023/03/24" : 4.3,
      "2023/03/25" : 3.3,
      "2023/03/26" : 3.1,
      "2023/03/27" : 4.7,
      "2023/03/28" : 4.6,
      "2023/03/29" : 2.1,
      "2023/03/30" : 3.3,
    });
  });
>>>>>>> main
});
