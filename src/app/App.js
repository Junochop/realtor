import React, { Component } from 'react';

import connection from '../firebaseRequests/connection';

import Listings from '../components/Listings/Listings.js';

import Building from '../components/Building/Building.js';
import ListingForm from '../components/ListingForm/ListingForm.js';
import './App.css';

class App extends Component {
  componentDidMount () {
    const fb = connection();
    console.error(fb);
  };

  render () {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Listings />
        </div>
        <div className="col-sm-6">
          <Building />
        </div>
        <div className="col-sm-12">
          <ListingForm />
        </div>
      </div>
    );
  }
}

export default App;
