import React, { Component } from 'react';

import Listings from '../components/Listings/Listings.js';

import Buildings from '../components/Building/Building.js';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Listings />
        <Buildings />
      </div>
    );
  }
}

export default App;
