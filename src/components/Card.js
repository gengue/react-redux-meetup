import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {
    const {
      name,
      photos_landing_page,
      highlight1, highlight2,
      cached_minimum_price
    } = this.props.trip;

    const imgSrc = photos_landing_page.split(';')[0];

    return (
      <div className="Card">
        <div className="Card-header">
          <h2>{name}</h2>
        </div>
        <div className="Card-body">
          <img src={`//d2ji2mue1p384z.cloudfront.net/img/480x360/${imgSrc}.jpg`} alt="Peru" />
          <div className="Card-content">
            <ul>
              <li>{highlight1}</li>
              <li>{highlight2}</li>
            </ul>
            <h3>{cached_minimum_price} Eur</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
