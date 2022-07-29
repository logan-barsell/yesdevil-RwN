import React, { Component } from 'react';
import { Form } from 'react-final-form';
import axios from 'axios';
import { ImageUpload, TextField } from '../Forms';

class AddMember extends Component {

  txtFields = [
    { label: 'Name', name: 'name' },
    { label: 'Role', name: 'role' },
    { label: 'Facebook Link', name: 'fbLink' },
    { label: 'Instagram Tag', name: 'instaTag' },
    { label: 'Snapchat Username', name: 'snapName' }
  ];

  renderFields() {
    return this.txtFields.map(({ label, name }, index) => {
      return (
        <TextField
          key={index}
          label={label}
          name={name}
        />
      );
    });
  }

  async onSubmit({ bioPic, name, role, fbLink, instaTag, snapName }) {
    // const parsedUrl = new URL(fbLink).pathname.replace('/', '');

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

  }

  render() {
    return (
      <div className="col-lg final-form">
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <ImageUpload name="bioPic" />
              {this.renderFields()}
              <div className="d-grid gap-2">
                <button className="submitMember btn btn-primary btn-danger" type="submit">Submit</button>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}

export default AddMember;