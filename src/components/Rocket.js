import React from 'react';
import { PropTypes } from 'prop-types';

const Rocket = ({ imageLink, name, description }) => (
  <div className="rocket">
    <img src={imageLink} alt={name} className="rocket-image" />

    <div className="rocket-info">
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button" className="reserve-button">Reserve Rocket</button>
    </div>

  </div>
);

Rocket.propTypes = {
  imageLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  id: PropTypes.number.isRequired,
};

Rocket.defaultProps = {
  reserved: undefined,
};

export default Rocket;
