import './Home.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import React, { useEffect } from 'react';
import Carousel from '../Bootstrap/Carousel';
import SecondaryNav from '../Navbar/SecondaryNav';
import ShowsAccordion from './ShowsAccordion';
import { connect } from 'react-redux';
import { fetchShows } from '../../actions';
// import ShowAd from './ShowAd';

const HomePage = ({ fetchShows, shows }) => {
  useEffect(() => {
    fetchShows();
  }, []);

  const accordionItems = [];

  const createAccordionItems = () => {
    shows.map((show) => {
      const { _id, poster, venue, city, date, doors, showtime, doorprice, advprice, tixlink } = show;
      const dateString = new Date(date).toLocaleString().split(',')[0];
      const doorstimeString = new Date(doors).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
      const showtimeString = new Date(showtime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
      return accordionItems.push({
        id: _id,
        venue,
        date: dateString,
        poster,
        city,
        content: [
          { prefix: 'Date: ', value: dateString },
          { prefix: 'Doors: ', value: doorstimeString },
          { prefix: 'Show: ', value: showtimeString },
          { prefix: 'Door Price: ', value: `$${doorprice}` },
          { prefix: 'Adv. Price: ', value: `$${advprice}` }
        ]
      });
    });
  }
  createAccordionItems();
  console.log(shows);

  return (
    <div id="home" className="fadeIn">

      <Carousel />

      {shows[0] ?
        <>
          <SecondaryNav label='Upcoming Shows' />

          <div id="upcomingshows">
            <div className="row justify-content-around">
              {/* <ShowAd /> */}
              <ShowsAccordion
                id="currentShows"
                title="Shows"
                items={accordionItems}
              />
            </div>
          </div>
        </>
        :
        null
      }

    </div>
  );
}

function mapStateToProps({ shows }) {
  return { shows };
}

export default connect(mapStateToProps, { fetchShows })(HomePage);