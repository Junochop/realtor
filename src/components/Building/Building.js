import React from 'react';

import './Building.css';

class Building extends React.Component {
  render () {
    const {listing} = this.props;
    if (!listing) {
      return (
        <h1>oh no1</h1>
      );
    }
    return (
      <div className="Building">
        <h2>Building</h2>
        <h4>{listing.price}</h4>
      </div>
    );
  }
}

export default Building;
