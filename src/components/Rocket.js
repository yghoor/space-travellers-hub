import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { reserveRocket, cancelReservation } from '../redux/rockets/rockets';

const Rocket = ({
  id, imageLink, name, description, reserved,
}) => {
  const dispatch = useDispatch();

  const reserve = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  const cancel = (rocketId) => {
    dispatch(cancelReservation(rocketId));
  };

  return (
    <div className="rocket">
      <img src={imageLink} alt={name} className="rocket-image" />

      <div className="rocket-info">
        <h2>{name}</h2>
        {reserved ? (
          <>
            <p>
              <small className="reserved-tag">reserved</small>
              {description}
            </p>
            <button type="button" className="cancel-button" onClick={() => cancel(id)}>Cancel Reservation</button>
          </>
        )
          : (
            <>
              <p>
                {description}
              </p>
              <button type="button" className="reserve-button" onClick={() => reserve(id)}>Reserve Rocket</button>
            </>
          )}
      </div>

    </div>
  );
};

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
