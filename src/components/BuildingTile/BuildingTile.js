import React from 'react';
import PropTypes from 'prop-types';
import './BuildingTile.css';

class BuildingTile extends React.Component {
  static protoTypes = {
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    pTagTex: PropTypes.string.isRequired,
  }

  render () {
    const {imageSrc, altText, pTagText} = this.props;
    const image = require(`./images/${imageSrc}.png`);
    return (
      <div className="col-xs-3 BuildingTile">
        <div className="image-detail">
          <img src={image} alt={altText} />
          <p>{pTagText}</p>
        </div>
      </div>

    );
  }
}

export default BuildingTile;
