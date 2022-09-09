import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchVideos } from '../../../redux/actions';
import ModalForm from '../../../components/Forms/ModalForm';
import CustomModal from '../../../components/Bootstrap/CustomModal';

const AddVideo = ({ fetchVideos }) => {

  const fields = [
    { label: 'Category', name: 'category', type: 'options', 
        options: [
            {name: 'Music Videos', value: 'musicVids'},
            {name: 'Live Performances', value: 'liveVids'}, 
            {name: 'Vlogs', value: 'vlogs'}
        ] 
    },
    { label: 'Title', name: 'title', type: 'text' },
    { label: 'Date', name: 'date', type: 'date' },
    { label: 'YouTube Link', name: 'link', type: 'text' }
  ];

  const onSubmit = ({ category, title, date, link }) => {

    const newVideo = {
      category,
      title,
      date,
      link
    };

    // const payload = new FormData();
    // for (let key in newMember) {
    //   payload.append(key, newMember[key]);
    // }

    axios.post('/api/addMember', newVideo).then(res => {
      fetchVideos();
    });
  }

  const modalProps = {
    id: 'add_video',
    label: 'add_video',
    title: 'NEW VIDEO',
    buttonText: 'Add Video'
  }


  const AddButton = () => {
    return (
      <button
        data-bs-toggle="modal"
        data-bs-target={`#${modalProps.id}`}
        className="addButton btn btn-danger"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
        </svg>
        {modalProps.buttonText}
      </button>
    );
  };

  return (
    <>
      <CustomModal modalProps={modalProps} modalButton={<AddButton />}>
        <ModalForm fields={fields} onSubmit={onSubmit} />
      </CustomModal>
    </>
  );

}

function mapStateToProps({ media }) {
  return { videos: media };
}

export default connect(mapStateToProps, { fetchVideos })(AddVideo);