import './Home.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import React, { useEffect } from 'react';
import Carousel from '../Bootstrap/Carousel';
import SecondaryNav from '../Navbar/SecondaryNav';
import Accordion from '../EditPages/Bootstrap/Accordion';
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
        data: show,
        group: 'shows',
        id: _id,
        name: venue,
        header: venue,
        img: poster,
        subhead: city,
        content: [
          { prefix: 'Date: ', value: dateString },
          { prefix: 'Doors: ', value: doorstimeString },
          { prefix: 'Show: ', value: showtimeString },
          { prefix: 'Door Price: ', value: doorprice },
          { prefix: 'Adv. Price: ', value: advprice },
          { prefix: 'Ticket Link: ', value: (<a style={{ 'textDecoration': 'underline' }} target="_blank" rel="noreferrer" href={tixlink}>Link</a>) }
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
              <Accordion
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