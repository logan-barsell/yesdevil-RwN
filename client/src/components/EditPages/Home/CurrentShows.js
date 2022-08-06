import './currentShows.css';

import React, { useEffect } from 'react';
import axios from 'axios';
import { fetchShows } from '../../../actions';
import { connect } from 'react-redux';
import Accordion from '../Bootstrap/Accordion';
import AddShow from './AddShow';
import editShowFields from './editShowFields';

const CurrentShows = ({ fetchShows, shows }) => {

  useEffect(() => {
    fetchShows();
  }, []);


  const deleteShow = id => {
    axios.get(`/api/deleteShow/${id}`).then(res => {
      fetchShows();
    });
  };

  const editFields = show => {
    return editShowFields(show);
  };

  const editShow = (_id, { poster, venue, city, date, doors, showtime, doorprice, advprice, tixlink }) => {
    const newPhoto = poster ? poster[0] : '';

    const updatedShow = {
      id: _id,
      poster: newPhoto,
      venue,
      city,
      date,
      doors,
      showtime,
      doorprice,
      advprice,
      tixlink
    };

    const payload = new FormData();
    for (let key in updatedShow) {
      payload.append(key, updatedShow[key]);
    }

    axios.post(`/api/updateShow/${_id}`, payload).then(res => {
      fetchShows();
    });

  }

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
          { prefix: 'Ticket Link: ', value: (<a style={{ 'textDecoration': 'underline' }} target="_blank" href={tixlink}>Link</a>) }
        ]
      });
    });
  }
  createAccordionItems();

  return (
    <>
      <Accordion
        id="showsList"
        title="Shows"
        items={accordionItems}
        editFields={editFields}
        onEdit={editShow}
        onDelete={deleteShow}
      />
      < AddShow />
    </>
  );
}

function mapStateToProps({ shows }) {
  return { shows };
}

export default connect(mapStateToProps, { fetchShows })(CurrentShows);
