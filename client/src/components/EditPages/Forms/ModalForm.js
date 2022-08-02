import './modalForm.css';

import React from 'react';
import { Form } from 'react-final-form';
import RenderField from './RenderField';

const ModalForm = ({ onSubmit, fields }) => {

  const renderFields = () => {
    return fields.map((field, index) => {
      return <RenderField key={index} field={field} />
    });
  }

  return (
    <div className="col-lg final-form">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, meta }) => (
          <form onSubmit={async (event) => {
            const error = await handleSubmit(event);
            if (error) { return error; }
            form.restart();
          }}>
            <div className="modal-body mx-auto mx-sm-4 my-3">
              {renderFields()}
            </div>
            <div className="modal-footer">
              <div className="d-grid col-auto">
                <div onClick={form.reset} type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancel</div>
              </div>
              <div className="d-grid col-6">
                <button className="submitForm btn btn-primary btn-danger" data-bs-dismiss="modal" type="submit">Submit</button>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default ModalForm;