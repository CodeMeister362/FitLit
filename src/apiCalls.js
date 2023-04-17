const URL = "http://localhost:3001/api/v1/"
const quotes = "https://type.fit/api/quotes"

export function fetchUsers() {
  return fetch(`${URL}users`)
    .then((response) => {
      if(!response.ok) {
        throw new Error(`${response.status}`)
      } else {
        return response.json();
      }
  })
  .catch((error) =>{
  console.error('User Data Error', error);
  alert("Network Unavailable");
})
};

export function fetchHydration() {
  return fetch(`${URL}hydration`)
    .then((response) => {
      if(!response.ok) {
        throw new Error(`${response.status}`)
      } else {
        return response.json();
      }
  })
  .catch((error) =>{
    console.error('Hydration Data Error', error);
    alert("Network Unavailable");
  })
};

export function fetchActivity() {
  return fetch(`${URL}activity`)
    .then((response) => {
      if(!response.ok) {
        throw new Error(`${response.status}`)
      } else {
        return response.json();
      }
  })
  .catch((error) =>{
    console.error('Activity Data Error', error);
    alert("Network Unavailable");
  })
};

export function fetchSleep() {
  return fetch(`${URL}sleep`)
    .then((response) => {
      if(!response.ok) {
        throw new Error(`${response.status}`)
      } else {
        return response.json();
      }
  })
  .catch((error) =>{
    console.error('Sleep Data Error', error);
    alert("Network Unavailable");
  })
};

export function inspireQuotes() {
  return fetch(quotes)
    .then(response => response.json())
};
