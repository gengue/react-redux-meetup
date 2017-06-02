import {
  REQUEST_TRIPS, RECEIVE_TRIPS, FILTER_TRIPS
} from '../actions/trips';

const defaultState = {
  isFetching: false,
  trips: [],
  filteredTrips: [],
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_TRIPS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_TRIPS:
      return {
        ...state,
        isFetching: false,
        trips: action.trips,
        filteredTrips: action.trips
      };
    case FILTER_TRIPS:
      return {
        ...state,
        filteredTrips: state.trips.filter(action.condition)
      };
    default: return state;
  }
};

export default reducer;
