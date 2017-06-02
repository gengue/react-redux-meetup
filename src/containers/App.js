import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrips, filterTrips } from '../actions/trips';
import Card from './../components/Card';
import Filterbar from './../components/Filterbar';
import './App.css';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTrips('peru'));
    this.applyFilter = this.applyFilter.bind(this);
  }

  applyFilter(e) {
    const value = e.target.value;
    const condition = (trip) => (parseInt(trip.cached_minimum_price) <= value);
    this.props.dispatch(filterTrips(condition));
  }

  render() {
    const { trips, isFetching } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src="//d2ji2mue1p384z.cloudfront.net/uploads/i18n/de_DE/logos/logo.svg" className="App-logo" alt="logo" />
          <h2>React/Redux Meetup</h2>
        </div>
        <section>
          <Filterbar handleFilter={this.applyFilter}/>
          <p>{(trips.length || -1) + 1} trips found</p>
          {
            isFetching
              ? <h2>Loading...</h2>
              : trips.map((trip, index) => {
                return (
                  <Card key={index} trip={trip} />
                  )
              })
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { filteredTrips, isFetching } = state.tripReducer;
  return {
    trips: filteredTrips,
    isFetching,
  }
};

export default connect(mapStateToProps)(App)
