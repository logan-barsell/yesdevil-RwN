import React from 'react';
import { Field } from 'react-final-form';

const TextField = ({ label, name }) => {
  return (
    <div className="form-group">
      <Field name={name}>
        {({ input }) => (
          <>
            <label htmlFor={name}>
              {label}
            </label>
            <input className="form-control" id={name} type="text" name={name} {...input} required />
          </>
        )}
      </Field>
    </div>
  );
};

export default TextField;