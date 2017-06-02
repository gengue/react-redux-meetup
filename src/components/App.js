import React, { Component } from 'react';
import Card from './Card';
import Filterbar from './Filterbar';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      isFetching: true,
    };
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/cobch')
         .then(data => data.json())
         .then(data => this.setState({trips: data.trips}));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="//d2ji2mue1p384z.cloudfront.net/uploads/i18n/de_DE/logos/logo.svg" className="App-logo" alt="logo" />
          <h2>React/Redux Meetup</h2>
        </div>
        <section>
          <Filterbar />
          {
            this.state.trips.map((trip, index) => {
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

export default App;
