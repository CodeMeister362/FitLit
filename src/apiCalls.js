// Your fetch requests will live here!


console.log('I will be a fetch request!')


export function fetchUsers() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
    .then(response => response.json());
}

export function fetchHydration() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
    .then(response => response.json())
}

export function fetchActivity() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
  .then(response => response.json())
}
