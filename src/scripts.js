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
console.log("User Data:", userData);

import UserRepository from './UserRepository';

const user = new UserRepository();

const userFirstName = document.querySelector(".user-card");
const checkRandom = document.querySelector(".welcome");
let userCard = document.querySelector(".user-card")
// window.addEventListener("DOMContentLoaded", generateRandomUser);
window.addEventListener("load", (event) => {
  userCard.textContent = `Hello ${userData.users[2].name}`
}
)

function show() {
};

function hide() {

};

// function generateRandomIndex(array) {
//   const arrayIndex = Math.floor(Math.random() * array.length);
//   return array[arrayIndex];

// };

function generateRandomUser() {
  // console.log(users)
// const test = users[generateRandomIndex(users)]
// console.log(UserData.users[2].name);
checkRandom.innerHTML += `${UserData.users[2].name}`;

};


// function generateRandomUser() {
//   const usersIndex = Math.floor(Math.random() * 50);
//   return usersIndex;

// };

// function generateRandomUser() {
//   console.log(users)
// const test = users[generateRandomIndex()]
// console.log(test);
// checkRandom.innerHTML += `${test}`;

// };
