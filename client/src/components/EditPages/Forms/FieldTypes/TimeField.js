import 'react-datepicker/dist/react-datepicker.css';
import './dateField.css';

import React from 'react';
import { Field } from 'react-final-form';
import DatePicker from 'react-datepicker';

const required = value => (value ? undefined : 'Required');

// const composeValidators = (...validators) => value =>
//   validators.reduce((error, validator) => error || validator(value), undefined);


const TimeField = ({ label, name, placeholder, initialValue }) => {
  const val = initialValue ? initialValue : '';

  const renderTimePicker = ({ name, placeholder, input: { value, onChange } }) => {
    return (
      <>
        <DatePicker
          placeholderText={placeholder}
          name={name}
          selected={value}
          onChange={date => onChange(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          required
        />
      </>
    )
  }

  return (
    <div className="form-group">
      <label htmlFor={name.doors}>
        {label}
      </label>
      <div className="input-group mb-3">
        <Field
          name={name.doors}
          placeholder={placeholder.doors}
          validate={required}
          component={renderTimePicker}
          initialValue={val}
        />
        <Field
          name={name.showtime}
          placeholder={placeholder.showtime}
          validate={required}
          component={renderTimePicker}
          initialValue={val}
        />
      </div>

    </div>
  );
};

export default TimeField;