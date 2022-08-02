import React from 'react';
import { Field } from 'react-final-form';

const required = value => (value ? undefined : 'Required');

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const TimeField = ({ label, name, initialValue }) => {
  const val = initialValue ? initialValue : '';
  return (
    <div className="form-group">
      <Field name={name} validate={required} initialValue={val}>
        {({ input, meta }) => (
          <>
            <label htmlFor={name}>
              {label}
            </label>
            <div className="input-group">
              <input
                className={`form-control${meta.error && meta.touched ? ' error' : ''}`}
                id={name}
                type="text"
                name={name}
                {...input}
                required
              />
            </div>
          </>
        )}
      </Field>
    </div>
  );
};

export default TimeField;