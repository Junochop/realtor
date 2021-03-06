import React from 'react';
import PropTypes from 'prop-types';

import { listingShape } from '../../propz/listingProp';
import './Listings.css';

import ListingItem from '../ListingItem/ListingItem';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
    onListingSelection: PropTypes.func,
  };

  render () {
    // const listings = this.props.listings for the bottom. props to getting it  state passes it down save from
    // Typing  const listings = this.props.listings In this props go find listings
    const { listings, onListingSelection } = this.props;
    const listingsItemComponents = listings.map((listing, index) => {
      //   return (
      //     // <li key={item.id} >{item.price}</li>
      //   );
      // });
      return (
        <ListingItem
          listing={listing}
          index={index}
          key={listing.id}
          onSelect={onListingSelection}
        />
      );
    });
    return (
      <div className="Listings">
        <h2>Listings</h2>
        <ul>
          {listingsItemComponents}
        </ul>
      </div>
    );
  }
}

export default Listings;
