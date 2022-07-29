import React from 'react';
import { Field } from 'react-final-form';

const required = value => (value ? undefined : 'Required');

const FBUrl = /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i;
const validFbLink = value => (value.match(FBUrl) ? undefined : 'Invalid Link');

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const TextField = ({ label, name }) => {
  const validation = name === 'fbLink' ? composeValidators(required, validFbLink) : required;
  return (
    <div className="form-group">
      <Field name={name} validate={validation}>
        {({ input, meta }) => (
          <>
            <label htmlFor={name}>
              {label}
            </label>
            <div className="input-group">
              {name === 'instaTag' ?
                <span className="input-group-text" id="basic-addon1">@</span>
                : null}
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

export default TextField;