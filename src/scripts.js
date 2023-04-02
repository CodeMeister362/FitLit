// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/runner.png';
import './images/wave.png';

import * as apiCalls from './apiCalls'; 

// An example of how you tell webpack to use a JS file

// import userData from './data/users';
import UserRepository from './UserRepository';
import Water from './hydrationClass';
import Activity from './activityClass'
import Sleep from './sleepClass';



  
  window.addEventListener("load", () => {
//======================================================
    apiCalls.kanyeIsBatShitCrazy().then(data => {
    const ye = document.querySelector(".kanye")
    //console.log(data.quote)
    ye.innerText = `"${data.quote}" -Ye`
  })
//======================================================
    function getRandomInt() {
      return Math.floor(Math.random() * 50);
    }
    const randomNum = getRandomInt();
    let person;
 
    // const today = new Date();
    // const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    // const todaysDate = today.toLocaleDateString('fr-CA', options).replace(/-/g, '/');


  apiCalls.fetchUsers().then(data => {
    person = data.users[randomNum];
    const userCard = document.querySelector('.user-card');
    // console.log(data.users)
    const user = new UserRepository(data.users[randomNum].id, data.users[randomNum].name, data.users[randomNum].address, data.users[randomNum].email, data.users[randomNum].strideLength, data.users[randomNum].dailyStepGoal, data.users[randomNum].friends)
    //  console.log(user) 
    userCard.innerHTML = 
    `<h3>Welcome ${user.getFirstName(user.id, data.users)}!</h3>
    <ul>
      <li>Your daily step goal is ${user.dailyStepGoal}</li>
      <li>The average step goal of all FitLitFans is ${user.getAverageSteps(data.users)}</li>
    </ul>`
    });

  apiCalls.fetchHydration().then(data => {
    const waterCard = document.querySelector('.water-card')
    
    const userWater = new Water(data)

    const display = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const todayDate = new Date().toLocaleDateString('fr-CA', display).replace(/-/g, '/');
    const aWeekEarlier = new Date(new Date().setDate(new Date().getDate() - 7)).toLocaleDateString('fr-CA', display).replace(/-/g, '/')

    const overAWeekObject = userWater.overAWeek(46, aWeekEarlier, todayDate) 
    console.log(userWater.overAWeek(46, aWeekEarlier, todayDate) )
    console.log(overAWeekObject)
    const hydrationWeekKeys = Object.keys(overAWeekObject)
    const hydrationWeekValues = Object.values(overAWeekObject)

    waterCard.innerHTML =
  `<h3>Hydration info</h3>
   <ul>
     <li>Your average fluid ounces consumed per day is ${userWater.averageOuncesPerDay(1)}</li>
     <li>you drank ${userWater.getSpecificDay(46, todayDate)} ounces today</li>
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

  apiCalls.fetchSleep().then(data => {
    const sleepCard = document.querySelector('.sleep-card')
    const display = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const todayDate = new Date().toLocaleDateString('fr-CA', display).replace(/-/g, '/');
    const aWeekEarlier = new Date(new Date().setDate(new Date().getDate() - 7)).toLocaleDateString('fr-CA', display).replace(/-/g, '/')

  
    const userSleep = new Sleep(data);

    const sleepDay = userSleep.getHoursByDay(1, todayDate);
    const dayQuality = userSleep.getSleepQualityByDay(1, todayDate)
    const sleepWeek = userSleep.getHoursSleptByWeek(1, aWeekEarlier, todayDate);
    const qualityWeek = userSleep.getSleepQualitytByWeek(1, aWeekEarlier, todayDate,);
    const sleepWeekKeys = Object.keys(sleepWeek)
    const sleepWeekValues = Object.values(sleepWeek)
    const qualityWeekKeys = Object.keys(qualityWeek);
    const qualityWeekValues = Object.values(qualityWeek);
    const allTimeSleep = userSleep.getAllTimeSleepAve(1);
    const allTimeSleepQuality = userSleep.getAllTimeQualityAve(1);

    console.log("This is sleepWeek:", sleepWeek)
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

    `
  })

  apiCalls.fetchActivity().then(data => {
    console.log('activity', data)
  })

  // fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
  // .then(response => response.json())
  // .then(data => {
    
  //   const sleepCard = document.querySelector('.sleep-card)

  //   const userSleep = new sleep(data.sleepData[randomNum])

  //   sleepCard.innerHTML = 
  // `<h3>Sleep Info</h3>
  //  <ul>
  //    <li>Your sleep</li>
  //    <li>This sleep</li>
  //    <li>This sleep</li>
  //  </ul>`
  // });

  // fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
  // .then(response => response.json())
  // .then(data => {
    
  //   const activityCard = document.querySelector('.activity-card')

  //   const userWater = new activity(data.activityData[randomNum])

  //   activityCard.innerHTML = 
  // `<h3>Activity info</h3>
  //  <ul>
  //    <li>Your so active</li>
  //    <li>Your so active</li>
  //    <li>Your so active</li>
  //  </ul>`
  // });
})
    apiCalls.fetchUsers().then(userData => {
      apiCalls.fetchActivity().then(activitydata => {
        const activityCard = document.querySelector('.step-card')
        
        const userActivity = new Activity(activitydata, userData)

        const display = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const todayDate = new Date().toLocaleDateString('fr-CA', display).replace(/-/g, '/');
        const aWeekEarlier = new Date(new Date().setDate(new Date().getDate() - 7)).toLocaleDateString('fr-CA', display).replace(/-/g, '/')

        const activityWeekObject = userActivity.overAWeek(46, aWeekEarlier, todayDate)
        const activityWeekKeys = Object.keys(activityWeekObject)
        const activityWeekValues = Object.values(activityWeekObject)
        
        activityCard.innerHTML = 
        `<h3>Activity info</h3>
        <ul>
        <li>You have walked ${userActivity.getMilesWalked(46, todayDate)} miles today</li>
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
      })
    })


    //overaweek(randomID, startDate= today.now, enddate= starddate - 7days)
    apiCalls.fetchSleep().then(data => {
      // console.log('sleep', data)
    })
  })