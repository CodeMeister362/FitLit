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

import userData from './data/users';
<<<<<<< HEAD

import UserRepository from './UserRepository';

const user = new UserRepository(userData.users[randomNum].id,userData.users[randomNum].name, userData.users[randomNum].address, userData.users[randomNum].email, userData.users[randomNum].strideLength, userData.users[randomNum].dailyStepGoal,userData.users[randomNum].friends);

let userCard = document.querySelector('.user-card')

window.addEventListener("load", () => {
  console.log(user.getUserData(user.id, users))
  userCard.innerHTML = 
 `<h3>${userData.users[randomNum].name}</h3>
  <ul>
      <li>stride length: ${userData.users[randomNum].strideLength}</li>
      <li>daily step goal: ${userData.users[randomNum].dailyStepGoal} </li>
    </ul>`
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const randomNum = getRandomInt(49)
=======
import UserRepository from './UserRepository';

function getRandomInt() {
  return Math.floor(Math.random() * 49);
}

const randomNum = getRandomInt();


const user = new UserRepository(userData.users[randomNum].id, userData.users[randomNum].name, userData.users[randomNum].address, userData.users[randomNum].email, userData.users[randomNum].strideLength, userData.users[randomNum].dailyStepGoal, userData.users[randomNum].friends)


const userCard = document.querySelector('.user-card')

window.addEventListener("load", (event) => {
  userCard.innerHTML = 
 `<h3>Welcome ${user.getFirstName(user.id, userData.users)}!</h3>
  <ul>
      <li>Your daily step goal is ${user.dailyStepGoal}</li>
      <li>The average step goal of all FitLitFans is ${user.getAverageSteps(userData.users)}</li>
    </ul>`
});


>>>>>>> fa72d54bf091e237bdf2e467f3e60bbf08a9b2a1
