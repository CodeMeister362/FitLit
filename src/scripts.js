// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/runner.png';
import './images/wave.png';

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

// import userData from './data/users';
import UserRepository from './UserRepository';
import Water from './WaterClass.js';


  
  window.addEventListener("load", () => {

    function getRandomInt() {
      return Math.floor(Math.random() * 49);
    }
    
    const randomNum = getRandomInt();

  fetch("https://fitlit-api.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .then(data => {

    const userCard = document.querySelector('.user-card');

    const user = new UserRepository(data.users[randomNum].id, data.users[randomNum].name, data.users[randomNum].address, data.users[randomNum].email, data.users[randomNum].strideLength, data.users[randomNum].dailyStepGoal, data.users[randomNum].friends)

    userCard.innerHTML = 
  `<h3>Welcome ${user.getFirstName(user.id, data.users)}!</h3>
   <ul>
    <li>Your daily step goal is ${user.dailyStepGoal}</li>
    <li>The average step goal of all FitLitFans is ${user.getAverageSteps(data.users)}</li>
  </ul>`
  });


  fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
  .then(response => response.json())
  .then(data => {
    
    const waterCard = document.querySelector('.water-card')

    const userWater = new Water(data.hydrationData[randomNum])
    console.log(userWater)
    waterCard.innerHTML = 
  `<h3>Hydration info</h3>
   <ul>
     <li>Your average fluid ounces consumed per day is ${userWater.id.numOunces}</li>
     <li>This is how many fluid ounces they consumed for a specific day...</li>
     <li>This is how many fluid ounces of water consumed each day over the course of a week..</li>
   </ul>`
  });

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





