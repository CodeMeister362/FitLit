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

  apiCalls.fetchUsers().then(data => {
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