// CSS file
import './css/styles.css';

// Images
import './images/turing-logo.png';
import './images/runner.png';
import './images/wave.png';

// Fetch requests
import * as apiCalls from './apiCalls'; 

// Local Data
import UserRepository from './UserRepository';
import Water from './hydrationClass';
import Activity from './activityClass'
import Sleep from './sleepClass';



  
window.addEventListener("load", () => {


  function getRandomInt() {
    return Math.floor(Math.random() * 50);
  };

  const randomNum = getRandomInt();
  const idRandom = randomNum - 1;
  let person;
 

  apiCalls.fetchUsers().then((data) => {
    person = data.users[randomNum];
    const userCard = document.querySelector('.user-card');
    const user = new UserRepository(
      data.users[randomNum].id, 
      data.users[randomNum].name, 
      data.users[randomNum].address, 
      data.users[randomNum].email, 
      data.users[randomNum].strideLength, 
      data.users[randomNum].dailyStepGoal, 
      data.users[randomNum].friends
      );
    userCard.innerHTML = 
    `<h3>Welcome ${user.getFirstName(user.id, data.users)}!</h3>
      <ul>
        <li>Your daily step goal is ${user.dailyStepGoal}</li>
        <li>The average step goal of all FitLitFans is ${user.getAverageSteps(data.users)}</li>
      </ul>`
    });

  apiCalls.fetchHydration().then((data) => {
    const waterCard = document.querySelector('.water-card');
    const userWater = new Water(data);
    const display = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const todayDate = new Date().toLocaleDateString('fr-CA', display).replace(/-/g, '/');
    const aWeekEarlier = new Date(new Date().setDate(new Date().getDate() - 7)).toLocaleDateString('fr-CA', display).replace(/-/g, '/');
    const overAWeekObject = userWater.overAWeek(idRandom, aWeekEarlier, todayDate);
    const hydrationWeekKeys = Object.keys(overAWeekObject);
    const hydrationWeekValues = Object.values(overAWeekObject);

    waterCard.innerHTML =
      `<h3>Your Hydration</h3>
      <ul>
        <li>Your average fluid ounces consumed per day is ${userWater.averageOuncesPerDay(idRandom)}</li>
        <li>You drank ${userWater.getSpecificDay(idRandom, todayDate)} ounces today</li>
        <p>On ${hydrationWeekKeys[0]} you drank ${hydrationWeekValues[0]} ounces of water</p>
        <p>On ${hydrationWeekKeys[1]} you drank ${hydrationWeekValues[1]} ounces of water</p>
        <p>On ${hydrationWeekKeys[2]} you drank ${hydrationWeekValues[2]} ounces of water</p>
        <p>On ${hydrationWeekKeys[2]} you drank ${hydrationWeekValues[2]} ounces of water</p>
        <p>On ${hydrationWeekKeys[3]} you drank ${hydrationWeekValues[3]} ounces of watrer</p>
        <p>On ${hydrationWeekKeys[4]} you drank ${hydrationWeekValues[4]} ounces of water</p>
        <p>On ${hydrationWeekKeys[5]} you drank ${hydrationWeekValues[5]} ounces of water</p>
        <p>On ${hydrationWeekKeys[6]} you drank ${hydrationWeekValues[6]} ounces of water</p>
      </ul>`
  });

  apiCalls.fetchSleep()
   .then((data) => {
    const userSleep = new Sleep(data);
    const sleepCard = document.querySelector('.sleep-card');
    const display = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const todayDate = new Date().toLocaleDateString('fr-CA', display).replace(/-/g, '/');
    const aWeekEarlier = new Date(new Date().setDate(new Date().getDate() - 7)).toLocaleDateString('fr-CA', display).replace(/-/g, '/')
    const sleepDay = userSleep.getHoursByDay(idRandom, todayDate);
    const dayQuality = userSleep.getSleepQualityByDay(idRandom, todayDate);
    const sleepWeek = userSleep.getHoursSleptByWeek(idRandom, aWeekEarlier, todayDate);
    const qualityWeek = userSleep.getSleepQualitytByWeek(idRandom, aWeekEarlier, todayDate,);
    const sleepWeekKeys = Object.keys(sleepWeek);
    const sleepWeekValues = Object.values(sleepWeek);
    const qualityWeekKeys = Object.keys(qualityWeek);
    const qualityWeekValues = Object.values(qualityWeek);
    const allTimeSleep = userSleep.getAllTimeSleepAve(idRandom);
    const allTimeSleepQuality = userSleep.getAllTimeQualityAve(idRandom);


    sleepCard.innerHTML = 
    `<h3>Your Sleep</h3>
    <ul>
      <li><b>Last Night</b>
        <p>${sleepDay} hours slept</p>
        <p>${dayQuality} sleep quality</p>
      <li><b>Last Week</b></li>
        <p>${sleepWeekKeys[0]}: ${sleepWeekValues[0]} hours slept</p>
        <p>${sleepWeekKeys[1]}: ${sleepWeekValues[1]} hours slept</p>
        <p>${sleepWeekKeys[2]}: ${sleepWeekValues[2]} hours slept</p>
        <p>${sleepWeekKeys[3]}: ${sleepWeekValues[3]} hours slept</p>
        <p>${sleepWeekKeys[4]}: ${sleepWeekValues[4]} hours slept</p>
        <p>${sleepWeekKeys[5]}: ${sleepWeekValues[5]} hours slept</p>
        <p>${sleepWeekKeys[6]}: ${sleepWeekValues[6]} hours slept</p>
        <p>${qualityWeekKeys[0]}: ${qualityWeekValues[0]} sleep quality</p>
        <p>${qualityWeekKeys[1]}: ${qualityWeekValues[1]} sleep quality</p>
        <p>${qualityWeekKeys[2]}: ${qualityWeekValues[2]} sleep quality</p>
        <p>${qualityWeekKeys[3]}: ${qualityWeekValues[3]} sleep quality</p>
        <p>${qualityWeekKeys[4]}: ${qualityWeekValues[4]} sleep quality</p>
        <p>${qualityWeekKeys[5]}: ${qualityWeekValues[5]} sleep quality</p>
        <p>${qualityWeekKeys[6]}: ${qualityWeekValues[6]} sleep quality</p>
      <li><b>All Time</b></li>
        <p>${allTimeSleep} hours slept</p>
        <p>${allTimeSleepQuality} sleep quality</p>
    </ul>
    `
   })
 .catch((error) => {
    console.error('Error fetching sleep data:', error);
 });

  });

apiCalls.fetchUsers().then((userData) => {
  apiCalls.fetchActivity().then((activitydata) => {
    const activityCard = document.querySelector('.step-card');
    const userActivity = new Activity(activitydata, userData);
    const display = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const todayDate = new Date().toLocaleDateString('fr-CA', display).replace(/-/g, '/');
    const aWeekEarlier = new Date(new Date().setDate(new Date().getDate() - 7)).toLocaleDateString('fr-CA', display).replace(/-/g, '/');
    const activityWeekObject = userActivity.overAWeek(46, aWeekEarlier, todayDate);
    const activityWeekKeys = Object.keys(activityWeekObject);
    const activityWeekValues = Object.values(activityWeekObject);
    
    activityCard.innerHTML = 
      `<h3>Your Activity</h3>
        <ul>
          <li>You have walked ${userActivity.getMilesWalked(46, todayDate)} miles today.</li>
          <li>You've been active for ${userActivity.getMinutesActive(46, todayDate)} minutes today!</li>
          <li>${userActivity.determineReachGoal(46, todayDate)}</li>
            <p>On ${activityWeekKeys[0]} you were active for ${activityWeekValues[0]} minutes</p>
            <p>On ${activityWeekKeys[1]} you were active for ${activityWeekValues[0]} minutes</p>
            <p>On ${activityWeekKeys[2]} you were active for ${activityWeekValues[2]} minutes</p>
            <p>On ${activityWeekKeys[3]} you were active for ${activityWeekValues[3]} minutes</p>
            <p>On ${activityWeekKeys[4]} you were active for ${activityWeekValues[4]} minutes</p>
            <p>On ${activityWeekKeys[5]} you were active for ${activityWeekValues[5]} minutes</p>
            <p>On ${activityWeekKeys[6]} you were active for ${activityWeekValues[6]} minutes</p>
        </ul>`
  });
});

