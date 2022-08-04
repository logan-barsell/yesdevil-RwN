import React, { Component } from 'react';
import { TextField, DateField, TimeField, ImageUpload, PriceField } from './FieldTypes';

class RenderField extends Component {

  renderContent() {
    const { name, label, placeholder, type, initialValue } = this.props.field;
    if (type === 'text') {
      return (
        <TextField
          label={label}
          name={name}
          placeholder={placeholder}
          initialValue={initialValue}
        />
      );
    } else if (type === 'date') {
      return (
        <DateField
          label={label}
          name={name}
          initialValue={initialValue}
        />
      )
    } else if (type === 'time') {
      return (
        <TimeField
          label={label}
          name={name}
          placeholder={placeholder}
          initialValue={initialValue}
        />
      )
    } else if (type === 'image') {
      return (
        <ImageUpload
          label={label}
          name={name}
          initialValue={initialValue}
        />
      )
    } else if (type === 'price') {
      return (
        <PriceField
          label={label}
          name={name}
          placeholder={placeholder}
          initialValue={initialValue}
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