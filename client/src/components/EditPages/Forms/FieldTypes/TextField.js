import React from 'react';
import { Field } from 'react-final-form';


const required = value => value ? undefined : 'Required';



const FBUrl = /^(https:\/\/)((w{3}\.))facebook.com\/.*/i;
const validFbLink = value => (value.match(FBUrl) ? undefined : 'Invalid Link');

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

// const configureValidation = (input) => {
//   if(input === 'fbLink') {
//     return composeValidators(required, validFbLink);
//   }
//   if(input === 'tixlink') {
//     return undefined;
//   }
// } 

const TextField = ({ label, name, initialValue }) => {
  const isRequired = name !== 'tixlink' && !initialValue;
  
  const validation = () => {
    if(name === 'fbLink') {
      return composeValidators(required, validFbLink);
    }
    if(isRequired) {
      return required;
    }
    return undefined;
  }
  const val = initialValue ? initialValue : undefined;
  
  return (
    <div className="form-group">
      <Field name={name} validate={validation()} initialValue={val}>
        {({ input, meta }) => (
          <>
            <label htmlFor={name}>
              {label}
            </label>
            <div className="input-group">
              {name === 'instaTag' &&
                <span className="input-group-text" id="basic-addon1">@</span>
              }
              <input
                className={`form-control${meta.error && meta.touched ? ' error' : ''}`}
                id={name}
                type="text"
                name={name}
                {...input}
                required={isRequired}
                autoComplete='off'
              />
            </div>
          </>
        )}
      </Field>
    </div>
  );
};

export default TextField;