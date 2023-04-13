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

import Chart from 'chart.js/auto';

const inputDate = document.getElementById('date')
const inputStairs = document.getElementById('numOfStairs')
const inputMinActive = document.getElementById('minActive')
const inputNumSteps = document.getElementById('numSteps')
const inputButton = document.getElementById('addDataButton')

const checkInputs = () => {
  if(inputDate.value.length >= 3 && inputStairs.value.length >= 3 && inputMinActive.value.length >= 3 && inputNumSteps.value.length >= 3){
    console.log('hey')
  } else {
    console.log('missing inputs')
  }
}


inputButton.addEventListener('click', () => checkInputs())


  
window.addEventListener("load", () => {

  apiCalls.inspireQuotes().then((data) => {
    const zen = document.querySelector(".quotes")
      zen.innerText = `"${data[randomNum].text} - ${data[randomNum].author}`
  });

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
    })
    .catch((error) => {
    console.error('Error fetching user data:', error);
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
        </ul>
        <canvas class="hydration-chart"></canvas>
        `

    new Chart(document.querySelector(".hydration-chart"), {
      type: 'line',
      data: {
        labels: [hydrationWeekKeys[0].slice(5, 10),hydrationWeekKeys[1].slice(5, 10),hydrationWeekKeys[2].slice(5, 10),hydrationWeekKeys[3].slice(5, 10),hydrationWeekKeys[4].slice(5, 10),hydrationWeekKeys[5].slice(5, 10),hydrationWeekKeys[6].slice(5, 10)],
        datasets: [{ 
            data: [hydrationWeekValues[0],hydrationWeekValues[1],hydrationWeekValues[2],hydrationWeekValues[3],hydrationWeekValues[4],hydrationWeekValues[5],hydrationWeekValues[6]],
            label: "Drank",
            borderColor: "#3e95cd",
            fill: true
          }
        ]
      },
      options: {
        plugins: {legend: {
          labels: {
            color: '#fff'
          },
        },
      },
        scales: {
          x: {
            ticks: {
              color: '#fff'
            },
          },
          y: {
            ticks: {
              color: '#fff'
            },
            beginAtZero: true
          }
        }
      }
    });
  })
   .catch((error) => {
    console.error('Error fetching hydration data:', error);
 });

  apiCalls.fetchSleep()
   .then((data) => {
    const userSleep = new Sleep(data, idRandom);
    const sleepCard = document.querySelector('.sleep-card');
    const display = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const todayDate = new Date().toLocaleDateString('fr-CA', display).replace(/-/g, '/');
    const aWeekEarlier = new Date(new Date().setDate(new Date().getDate() - 7)).toLocaleDateString('fr-CA', display).replace(/-/g, '/')
    const sleepDay = userSleep.getHoursByDay(todayDate);
    const dayQuality = userSleep.getSleepQualityByDay(todayDate);
    const sleepWeek = userSleep.getHoursSleptByWeek(aWeekEarlier, todayDate);
    const qualityWeek = userSleep.getSleepQualitytByWeek(aWeekEarlier, todayDate,);
    const sleepWeekKeys = Object.keys(sleepWeek);
    const sleepWeekValues = Object.values(sleepWeek);
    const qualityWeekKeys = Object.keys(qualityWeek);
    const qualityWeekValues = Object.values(qualityWeek);
    const allTimeSleep = userSleep.getAllTimeSleepAve();
    const allTimeSleepQuality = userSleep.getAllTimeQualityAve();

    sleepCard.innerHTML = 
    `<h3>Your Sleep</h3>
    <ul>
      <li><b>Last Night</b>
        <p>${sleepDay} hours slept</p>
        <p>${dayQuality} sleep quality</p>
    </ul>
    <canvas class="sleep-chart"></canvas>
    <ul>
      <li><b>All Time</b></li>
        <p>${allTimeSleep} hours slept</p>
        <p>${allTimeSleepQuality} sleep quality</p>
    </ul>
    <canvas class="quality-sleep-chart"></canvas>
    `
    new Chart(document.querySelector(".quality-sleep-chart"), {
      type: 'line',
      data: {
        labels: [qualityWeekKeys[0].slice(5, 10),qualityWeekKeys[1].slice(5, 10),qualityWeekKeys[2].slice(5, 10),qualityWeekKeys[3].slice(5, 10),qualityWeekKeys[4].slice(5, 10),qualityWeekKeys[5].slice(5, 10),qualityWeekKeys[6].slice(5, 10)],
        datasets: [{ 
            data: [qualityWeekValues[0],qualityWeekValues[1],qualityWeekValues[2],qualityWeekValues[3],qualityWeekValues[4],qualityWeekValues[5],qualityWeekValues[6]],
            label: "Quality Sleep Last Week",
            borderColor: "#3e95cd",
            fill: true
          }
        ]
      },
      options: {
        plugins: {legend: {
          labels: {
            color: '#fff'
          },
        },
      },
        scales: {
          x: {
            ticks: {
              color: '#fff'
            },
          },
          y: {
            ticks: {
              color: '#fff'
            },
            beginAtZero: true
          }
        }
      }
    });

    new Chart(document.querySelector(".sleep-chart"), {
      type: 'line',
      data: {
        labels: [sleepWeekKeys[0].slice(5, 10),sleepWeekKeys[1].slice(5, 10),sleepWeekKeys[2].slice(5, 10),sleepWeekKeys[3].slice(5, 10),sleepWeekKeys[4].slice(5, 10),sleepWeekKeys[5].slice(5, 10),sleepWeekKeys[6].slice(5, 10)],
        datasets: [{ 
            data: [sleepWeekValues[0],sleepWeekValues[1],sleepWeekValues[2],sleepWeekValues[3],sleepWeekValues[4],sleepWeekValues[5],sleepWeekValues[6]],
            label: "Sleep Last Week",
            borderColor: "#3e95cd",
            fill: true
          }
        ]
      },
      options: {
        plugins: {legend: {
          labels: {
            color: '#fff'
          },
        },
      },
        scales: {
          x: {
            ticks: {
              color: '#fff'
            },
          },
          y: {
            ticks: {
              color: '#fff'
            },
            beginAtZero: true
          }
        }
      }
    });
   })
 .catch((error) => {
    console.error('Error fetching sleep data:', error);
 });

  apiCalls.fetchUsers().then((userData) => {
    apiCalls.fetchActivity().then((activitydata) => {
      const activityCard = document.querySelector('.activity-card');
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
            <li>You have walked ${userActivity.getMilesWalked(46, todayDate).toFixed(2)} miles today.</li>
            <li>You've been active for ${userActivity.getMinutesActive(46, todayDate)} minutes today!</li>
            <li>${userActivity.determineReachGoal(46, todayDate)}</li>
          </ul>
          <canvas class="activity-chart"></canvas>
          `

    new Chart(document.querySelector(".activity-chart"), {
        type: 'line',
        data: {
          labels: [activityWeekKeys[0].slice(5, 10),activityWeekKeys[1].slice(5, 10),activityWeekKeys[2].slice(5, 10),activityWeekKeys[3].slice(5, 10),activityWeekKeys[4].slice(5, 10),activityWeekKeys[5].slice(5, 10),activityWeekKeys[6].slice(5, 10)],,
          datasets: [{ 
              data: [activityWeekValues[0],activityWeekValues[1],activityWeekValues[2],activityWeekValues[3],activityWeekValues[4],activityWeekValues[5],activityWeekValues[6]],
              label: "Minutes Active",
              borderColor: "#3e95cd",
              fill: true
            }
          ]
        },
        options: {
            plugins: {legend: {
              labels: {
                color: '#fff'
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: '#fff'
              },
            },
            y: {
              ticks: {
                color: '#fff'
              },
              beginAtZero: true
            }
          }
        }
      });
    });
  });
});
