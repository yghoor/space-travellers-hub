import React from 'react';
import { useSelector } from 'react-redux';

import Rocket from './Rocket';

const RocketList = () => {
  const rocketList = useSelector((state) => state.rocketsReducer);

  if (Object.keys(rocketList).length === 0) {
    return (
      <div className="loading">
        <h1>Loading Rockets...</h1>
      </div>
    );
  }

  return (
    <div className="rocket-list">
      <ul>
        {rocketList.map((rocket) => (
          <Rocket
            key={rocket.id}
            imageLink={rocket.flickr_images[0]}
            name={rocket.rocket_name}
            description={rocket.description}
            reserved={rocket.reserved}
            id={rocket.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default RocketList;
