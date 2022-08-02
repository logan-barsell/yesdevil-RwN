import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchShows } from '../../../actions';
import ModalForm from '../Forms/ModalForm';
import Modal from '../Bootstrap/Modal';

const AddMember = ({ fetchShows }) => {

  const fields = [
    { label: 'Upload Image', name: 'poster', type: 'image' },
    { label: 'Venue', name: 'venue', type: 'text' },
    { label: 'City', name: 'city', type: 'text' },
    { label: 'Date', name: 'date', type: 'date' },
    { label: 'Doors Open', name: 'doors', type: 'time' },
    { label: 'Show Starts', name: 'showtime', type: 'time' },
    { label: 'Ticket Link', name: 'tixlink', type: 'text' }
  ];


  const onSubmit = ({ poster, venue, city, date, doors, showtime, tixlink }) => {
    const dateString = new Date(date).toLocaleString().split(',')[0];
    const timeString = new Date(doors).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });

    console.log(timeString);
    // const newShow = {
    //   poster: poster[0],
    //   venue,
    //   city,
    //   date,
    //   doors,
    //   showtime,
    //   tixlink
    // };

    // console.log(newShow);

    // const payload = new FormData();
    // for (let key in newShow) {
    //   payload.append(key, newShow[key]);
    // }

    // axios.post('/api/addShow', payload).then(res => {
    //   fetchShows();
    // });
  }

  const modalProps = {
    id: 'add_show',
    label: 'show_label',
    title: 'NEW SHOW',
    buttonText: 'Add Show'
  };


  return (
    <>
      <Modal modalProps={modalProps}>
        <ModalForm fields={fields} onSubmit={onSubmit} />
      </Modal>
    </>
  );

}

function mapStateToProps({ shows }) {
  return { shows };
}

export default connect(mapStateToProps, { fetchShows })(AddMember);