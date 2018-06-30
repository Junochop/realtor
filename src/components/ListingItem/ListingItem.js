import React from 'react';
import PropTypes from 'prop-types';

import { listingShape } from '../../propz/listingProp';
import {formatPrice} from '../../helpers';
import './ListingItem.css';

class ListingItem extends React.Component {
  static propTypes = {
    listing: listingShape,
    index: PropTypes.number,
    onSelect: PropTypes.func,
  };

  listingClick = (e) => {
    e.stopPropagation();
    const { listing, onSelect } = this.props;
    // pass the ID to App JS  app is a parent listing item is a child. pass the function in app js and pass it down here
    onSelect(listing.id);
  }
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