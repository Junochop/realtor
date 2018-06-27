import React, { Component } from 'react';

import Listings from '../components/Listings/Listings.js';

import Building from '../components/Building/Building.js';
import ListingForm from '../components/ListingForm/ListingForm.js';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Listings />
        <Building />
        <ListingForm />
      </div>
    );
  }
}

export default App;
