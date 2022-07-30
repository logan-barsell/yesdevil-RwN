import React from 'react';
import { Form } from 'react-final-form';
import axios from 'axios';
import { ImageUpload, TextField } from '../Forms';

const AddMember = ({ onCancel }) => {

  const navigate = useNavigate();

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

  const onSubmit = async ({ bioPic, name, role, fbLink, instaTag, snapName }) => {

    const newMember = {
      bioPic: bioPic[0],
      name,
      role,
      fbLink,
      instaTag,
      snapName
    };
    console.log(newMember);

    const payload = new FormData();
    for (let key in newMember) {
      payload.append(key, newMember[key]);
    }

    await axios.post('/api/addMember', payload);
    onCancel();
  }

  return (
    <div className="col-lg final-form">

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <button
              className="cancel btn btn-dark"
              onClick={onCancel}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
            </button>
            <ImageUpload name="bioPic" />
            {renderFields()}
            <div className="d-grid gap-2">
              <button className="submitMember btn btn-primary btn-danger" type="submit">Submit</button>
            </div>
          </form>
        )}
      />
    </div>
  );

}

export default AddMember;