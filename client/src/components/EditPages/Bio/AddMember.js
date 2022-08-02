import React from 'react';
import { Form } from 'react-final-form';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchMembers } from '../../../actions';
import { ImageUpload, TextField } from '../Forms/FieldTypes';
import { createPortal } from 'react-dom';

const AddMember = ({ fetchMembers }) => {

  const txtFields = [
    { label: 'Name', name: 'name' },
    { label: 'Role', name: 'role' },
    { label: 'Facebook Link', name: 'fbLink' },
    { label: 'Instagram Tag', name: 'instaTag' },
    { label: 'Snapchat Username', name: 'snapName' }
  ];

  const renderFields = () => {
    return txtFields.map(({ label, name }, index) => {
      return (
        <TextField
          key={index}
          label={label}
          name={name}
        />
      );
    });
  }

  const onSubmit = ({ bioPic, name, role, fbLink, instaTag, snapName }) => {

    const newMember = {
      bioPic: bioPic[0],
      name,
      role,
      fbLink,
      instaTag,
      snapName
    };

    const payload = new FormData();
    for (let key in newMember) {
      payload.append(key, newMember[key]);
    }

    axios.post('/api/addMember', payload).then(res => {
      fetchMembers();
    });
  }

  const renderForm = (
    <div className="col-lg final-form">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, meta }) => (
          <form onSubmit={async (event) => {
            const error = await handleSubmit(event);
            if (error) { return error; }
            form.restart();
          }}>
            <div className="modal-body">
              <ImageUpload name="bioPic" />
              {renderFields()}
            </div>
            <div className="modal-footer">
              <div onClick={form.reset} type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancel</div>
              <button className="submitMember btn btn-primary btn-danger" data-bs-dismiss="modal" type="submit">Submit</button>
            </div>
          </form>
        )}
      />
    </div>
  );

  const modalId = 'add_modal';
  const modalLabel = 'add_label';

  const modal = (
    <div className="editMember modal fade" id={modalId} tabIndex="-1" aria-labelledby={modalLabel} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={modalLabel}>NEW MEMBER</h5>
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
      <button
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        className="addMember btn btn-danger"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
        </svg>
        Add Member
      </button>

      {renderModal()}

    </>
  );

}

function mapStateToProps({ members }) {
  return { members };
}

export default connect(mapStateToProps, { fetchMembers })(AddMember);