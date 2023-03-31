import { assert } from 'chai';
import sleepClass from '../src/sleepClass';
import sleepMockData from './sleep-mock-data';

describe("Sleep Class", () => {


beforeEach(() => {
  const sleepData = new Sleep(sleepMockData);
  
});




// All Time: ave number of hours slept 
// All Time ave quality / day over all time
// Specific Day: hours slept 
// Specific Day: sleep quality 
// Week: hours slept
// Week: sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week.