import React from 'react';
import PropTypes from 'prop-types';

import { listingShape } from '../../propz/listingProp';
import {formatPrice} from '../../helpers';
import './ListingItem.css';

class ListingItem extends React.Component {
  static propTypes = {
    listings: listingShape,
    index: PropTypes.number,
  };

  render () {
    // const listings = this.props.listings for the bottom. props to getting it  state passes it down save from
    // Typing  const listings = this.props.listings In this props go find listings
    const { listing, index } = this.props;
    return (
      <li className='ListingItem text-center' onClick={this.listingClick}>
        <span className="col-xs-2"><strong>Listing {index + 1}:</strong></span>
        <span className="col-xs-4">{listing.address} <br /> {listing.city}, {listing.state} {listing.zip}</span>
        <span className="col-xs-3">{listing.numBeds} Bed/{listing.numBaths} Bath <br /> Built in {listing.yearBuilt}</span>
        <span className="col-xs-3">{formatPrice(listing.price)} <br /> {listing.squareFootage} ft<sup>2</sup></span>
      </li>
    );
  }
}

export default ListingItem;