import './Home.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import React from 'react';
import Carousel from '../Bootstrap/Carousel';
import SecondaryNav from '../Navbar/SecondaryNav';
import ShowAd from './ShowAd';
import { shows } from './ShowDetails';

const HomePage = () => {
  return (
    <div id="home" className="fadeIn">

      <Carousel />

      {shows[0] ?
        <>
          <SecondaryNav label='Upcoming Shows' />

          <div id="upcomingshows">
            <div className="row justify-content-around">
              <ShowAd />
            </div>
          </div>
        </>
        :
        null
      }

    </div>
  );
}

export default HomePage;