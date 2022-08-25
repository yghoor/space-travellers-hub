import React from 'react';
import { PropTypes } from 'prop-types';

import Rocket from './Rocket';

const RocketList = ({ rocketList }) => (
  <div className="rocket-list">
    <ul>
      {rocketList.map((rocket) => (
        <Rocket
          key={rocket.id}
          imageLink={rocket.flickr_images[0]}
          name={rocket.rocket_name}
          description={rocket.description}
        />
      ))}
    </ul>
  </div>
  );
};

export default RocketList;
