import React from 'react';
// import PropTypes from 'prop-types';

import { listingShape } from '../../propz/listingProp';
import './ListingItem.css';

class ListingItem extends React.Component {
  static propTypes = {
    listings: listingShape,
  };

  render () {
    // const listings = this.props.listings for the bottom. props to getting it  state passes it down save from
    // Typing  const listings = this.props.listings In this props go find listings
    const { listing } = this.props;
    return (
      <li >{listing.price}</li>
    );
  }
}

export default ListingItem;