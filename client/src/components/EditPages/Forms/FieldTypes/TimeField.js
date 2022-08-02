import 'react-datepicker/dist/react-datepicker.css';
import './dateField.css';

import React from 'react';
import { Field } from 'react-final-form';
import DatePicker from 'react-datepicker';

const required = value => (value ? undefined : 'Required');

// const composeValidators = (...validators) => value =>
//   validators.reduce((error, validator) => error || validator(value), undefined);


const TimeField = ({ label, name, initialValue }) => {
  const val = initialValue ? initialValue : '';

  const renderTimePicker = ({ name, input: { value, onChange } }) => {
    return (
      <>
        <label htmlFor={name}>
          {label}
        </label>
        <DatePicker
          name={name}
          selected={value}
          onChange={date => onChange(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </>
    )
  }

  return (
    <div className="form-group">
      <Field
        name={name}
        validate={required}
        component={renderTimePicker}
        initialValue={val} />
    </div>
  );
};

export default TimeField;