import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchShows } from '../../../actions';
import ModalForm from '../Forms/ModalForm';
import CustomModal from '../Bootstrap/CustomModal';
import ADD_SHOW_FIELDS from './addShowFields';

const AddMember = ({ fetchShows }) => {


  const modalProps = {
    id: 'add_show',
    label: 'show_label',
    title: 'NEW SHOW',
    buttonText: 'Add Show'
  };

  const onSubmit = ({ poster, venue, city, date, doors, showtime, doorprice, advprice, tixlink }) => {
    // const dateString = new Date(date).toLocaleString().split(',')[0];
    // const timeString = new Date(doors).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });

    const newDate = date.getTime();
    const newDoors = doors.getTime();
    const newShowtime = showtime.getTime();

    const newShow = {
      poster: poster[0],
      venue,
      city,
      date: newDate,
      doors: newDoors,
      showtime: newShowtime,
      doorprice,
      advprice,
      tixlink
    };

    console.log(newShow);

    const payload = new FormData();
    for (let key in newShow) {
      payload.append(key, newShow[key]);
    }

    axios.post('/api/addShow', payload).then(res => {
      fetchShows();
    });

  }




  return (
    <>
      <CustomModal modalProps={modalProps}>
        <ModalForm fields={ADD_SHOW_FIELDS} onSubmit={onSubmit} />
      </CustomModal>
    </>
  );

}

function mapStateToProps({ shows }) {
  return { shows };
}

export default connect(mapStateToProps, { fetchShows })(AddMember);