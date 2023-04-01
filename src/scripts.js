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
    console.log(data.users)
    const user = new UserRepository(data.users[randomNum].id, data.users[randomNum].name, data.users[randomNum].address, data.users[randomNum].email, data.users[randomNum].strideLength, data.users[randomNum].dailyStepGoal, data.users[randomNum].friends)

    userCard.innerHTML = 
    `<h3>Welcome ${user.getFirstName(user.id, data.users)}!</h3>
    <ul>
      <li>Your daily step goal is ${user.dailyStepGoal}</li>
      <li>The average step goal of all FitLitFans is ${user.getAverageSteps(data.users)}</li>
    </ul>`
    });

  apiCalls.fetchHydration().then(data => {
    //console.log(data.hydrationData)
    const waterCard = document.querySelector('.water-card')

    const userWater = new Water(data)
    console.log('water', userWater)
    waterCard.innerHTML =
  `<h3>Hydration info</h3>
   <ul>
     <li>Your average fluid ounces consumed per day is ${userWater.averageOuncesPerDay(data.hydrationData, userWater.id)}</li>
     <li>This is how many fluid ounces they consumed for a specific day...</li>
     <li>This is how many fluid ounces of water consumed each day over the course of a week..</li>
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
    const sleepWeek = userSleep.getHoursSleptByWeek(1, todayDate, aWeekEarlier);
    const qualityWeek = userSleep.getSleepQualitytByWeek(1, todayDate, aWeekEarlier);
    console.log(qualityWeek)
    const qualityWeekKeys = Object.keys(qualityWeek);
    console.log("This is sleepWeek:", sleepWeek)
    sleepCard.innerHTML = 
    `<h3>Your Sleep</h3>
    <ul>
      <li><b>Last Night</b>
        <p>${sleepDay} hours slept</p>
        <p>${dayQuality} sleep quality</p>
      <li><b>Last Week</b></li>
        <p>${sleepWeek} hours slept</p>
        <p>${qualityWeekKeys} sleep quality</p>
      <li><b>All Time</b></li>
        <p> hours slept</p>
        <p> sleep quality</p>

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









