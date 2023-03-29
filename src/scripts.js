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

function getRandomInt() {
  return Math.floor(Math.random() * 49);
}

const randomNum = getRandomInt();

const userCard = document.querySelector('.user-card')

fetch("https://fitlit-api.herokuapp.com/api/v1/users")
  .then((response) => {
    return response.json()
  })
  .then((userData) => {
    
  const user = new UserRepository(userData.users[randomNum].id, userData.users[randomNum].name, userData.users[randomNum].address, userData.users[randomNum].email, userData.users[randomNum].strideLength, userData.users[randomNum].dailyStepGoal, userData.users[randomNum].friends)

  console.log('THIS IS THE USER', user)

  
  window.addEventListener("load", (event) => {
    userCard.innerHTML = 
  `<h3>Welcome ${user.getFirstName(user.id, userData.users)}!</h3>
    <ul>
        <li>Your daily step goal is ${user.dailyStepGoal}</li>
        <li>The average step goal of all FitLitFans is ${user.getAverageSteps(userData.users)}</li>
      </ul>`
  });
  })






