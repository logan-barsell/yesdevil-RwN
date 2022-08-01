import React from 'react';
import { Form } from 'react-final-form';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchMembers } from '../../../actions';
import { ImageUpload, TextField } from '../Forms';
import { createPortal } from 'react-dom';

const EditMember = ({ member, fetchMembers }) => {
  const { _id, bioPic, name, role, fbLink, instaTag, snapName } = member;

  const txtFields = [
    { label: 'Name', name: 'name', initialValue: name },
    { label: 'Role', name: 'role', initialValue: role },
    { label: 'Facebook Link', name: 'fbLink', initialValue: fbLink },
    { label: 'Instagram Tag', name: 'instaTag', initialValue: instaTag },
    { label: 'Snapchat Username', name: 'snapName', initialValue: snapName }
  ];

  const renderFields = () => {
    return txtFields.map(({ label, name, initialValue }, index) => {
      return (
        <TextField
          key={index}
          label={label}
          name={name}
          initialValue={initialValue}
        />
      );
    });
  };

  const onSubmit = ({ bioPic, name, role, fbLink, instaTag, snapName }) => {
    const newPhoto = bioPic ? bioPic[0] : '';

    const updatedMember = {
      id: _id,
      bioPic: newPhoto,
      name,
      role,
      fbLink,
      instaTag,
      snapName
    };

    const payload = new FormData();
    for (let key in updatedMember) {
      payload.append(key, updatedMember[key]);
    }

    axios.post(`/api/updateMember/${_id}`, payload);
    fetchMembers();
  }

  const renderForm = (
    <div className="col-lg final-form">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <ImageUpload name="bioPic" existingFile={bioPic} />
              {renderFields()}
            </div>
            <div className="modal-footer">
              <div type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancel</div>
              <button className="submitMember btn btn-primary btn-danger" data-bs-dismiss="modal" type="submit">Update</button>
            </div>
          </form>
        )}
      />
    </div>
  );

  const modalId = `edit_modal_${_id}`;
  const modalLabel = `edit_label_${_id}`;

  const modal = (
    <div className="editMember modal fade" id={modalId} tabIndex="-1" aria-labelledby={modalLabel} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={modalLabel}>EDIT MEMBER</h5>
            <div type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></div>
          </div>
          {renderForm}
        </div>
      </div>
    </div>
  );

  const renderModal = () => {
    const modalContainer = document.querySelector('.modal-container');
    return createPortal(modal, modalContainer);
  }

  return (
    <>
      <div
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        className="btn-sm btn-dark"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
      </div>

      {renderModal()}

    </>
  );

}

function mapStateToProps({ members }) {
  return { members };
}

export default connect(mapStateToProps, { fetchMembers })(EditMember);