import React, { Component } from 'react';
import './Filterbar.css';

class Filterbar extends Component {

  render() {
    const { handleFilter } = this.props;

    return (
      <div className="Filterbar">
        <h2>Filter</h2>
        <div className="form-control">
          <label>Max Price</label>
          <input type="number" min="0" defaultValue="8000" onChange={handleFilter}/>
        </div>
      </div>
    );
  }
}

export default Filterbar;
