import 'react-datepicker/dist/react-datepicker.css';
import './dateField.css';

import React from 'react';
import { Field } from 'react-final-form';
import DatePicker from 'react-datepicker';

const required = value => (value ? undefined : 'Required');

// const composeValidators = (...validators) => value =>
//   validators.reduce((error, validator) => error || validator(value), undefined);


const DateField = ({ label, name, initialValue }) => {
  const val = initialValue ? initialValue : '';

  const renderDatePicker = ({ name, input: { value, onChange } }) => {
    return (
      <>
        <label htmlFor={name}>
          {label}
        </label>
        <DatePicker
          name={name}
          selected={value}
          onChange={date => onChange(date)}
        />
      </>
    )
  }

  return (
    <div className="form-group">
      <Field
        name={name}
        validate={required}
        component={renderDatePicker}
        initialValue={val} />
    </div>
  );
};

export default DateField;