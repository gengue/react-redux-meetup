import React, { Component } from 'react';
import './Filterbar.css';

class Filterbar extends Component {

  render() {
    return (
      <div className="Filterbar">
        <h2>Filter</h2>
        <div className="form-control">
          <label>Max Price</label>
          <input type="number" min="0" defaultValue="4500"/>
        </div>
      </div>
    );
  }
}

export default Filterbar;
