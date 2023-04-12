const fitFans = "http://localhost:3001/api/v1/users"
const hydrate = "http://localhost:3001/api/v1/hydration"
const move = "http://localhost:3001/api/v1/activity"
const sleep = "http://localhost:3001/api/v1/sleep"
const quotes = "https://type.fit/api/quotes"

export function fetchUsers() {
  return fetch(fitFans)
    .then(response => response.json());
};

export function fetchHydration() {
  return fetch(hydrate)
    .then(response => response.json())
};

export function fetchActivity() {
  return fetch(move)
  .then(response => response.json())
};

export function fetchSleep() {
  return fetch(sleep)
    .then(response => response.json())
};

export function inspireQuotes() {
  return fetch(quotes)
    .then(response => response.json())
};
