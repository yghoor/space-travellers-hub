import React from 'react';
import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  const rocketList = useSelector((state) => state.rocketsReducer);

  return (
    <ul className="reserved-rockets">
      {rocketList.map((rocket) => {
        if (rocket.reserved) {
          return (
            <li key={rocket.id}>{rocket.rocket_name}</li>
          );
        }
        return null;
      })}
    </ul>
  );
};

export default ReservedRockets;
