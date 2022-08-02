import React, { Component } from 'react';
import { TextField, DateField, TimeField, ImageUpload } from './FieldTypes';

class RenderField extends Component {

  renderContent() {
    const { name, label, type } = this.props.field;
    if (type === 'text') {
      return (
        <TextField
          label={label}
          name={name}
        />
      );
    } else if (type === 'date') {
      return (
        <DateField
          label={label}
          name={name}
        />
      )
    } else if (type === 'time') {
      return (
        <TimeField
          label={label}
          name={name}
        />
      )
    } else if (type === 'image') {
      return (
        <ImageUpload
          label={label}
          name={name}
        />
      )
    }
  }

  render() {
    return (
      <>
        {this.renderContent()}
      </>
    );
  }

}

export default RenderField;