export function fetchUsers() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
    .then(response => response.json());
};

export function fetchHydration() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
    .then(response => response.json())
};

export function fetchActivity() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
  .then(response => response.json())
};

export function fetchSleep() {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
    .then(response => response.json())
};

export function inspireQuotes() {
  return fetch("https://type.fit/api/quotes")
    .then(response => response.json())
};

