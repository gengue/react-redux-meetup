export const REQUEST_TRIPS = 'REQUEST_TRIPS';
export const RECEIVE_TRIPS = 'RECEIVE_TRIPS';
export const FILTER_TRIPS = 'FILTER_TRIPS';

export const filterTrips = condition => ({
  type: FILTER_TRIPS,
  condition
});

export const requestTrips = country => ({
  type: REQUEST_TRIPS,
  country
});

export const receiveTrips = (country, payload) => ({
  type: RECEIVE_TRIPS,
  country,
  trips: payload.trips
});

export const fetchTrips = country => dispatch => {
  dispatch(requestTrips(country));
  return fetch('https://api.myjson.com/bins/cobch')
    .then(res => res.json())
    .then(data => dispatch(receiveTrips(country, data)));
}

