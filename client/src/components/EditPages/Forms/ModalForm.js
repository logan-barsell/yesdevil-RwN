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
            {console.log(Object.keys(form.getState().errors).length === 0)}
            <div className="modal-body mx-auto mx-sm-4 my-3">
              {renderFields()}
            </div>
            <div className="modal-footer">
              <div className="d-grid col-auto">
                <div onClick={form.restart} type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancel</div>
              </div>
              <div className="d-grid col-6">
                <button
                  data-bs-dismiss={Object.keys(form.getState().errors).length === 0 ? "modal" : null}
                  className="submitForm btn btn-primary btn-danger"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default ModalForm;