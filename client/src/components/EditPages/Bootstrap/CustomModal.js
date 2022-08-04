import './customModal.css';

import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ modalProps, children, modalButton }) => {

  const { id, label, title, buttonText } = modalProps;

  const modal = (
    <div className="editMember modal fade" id={id} tabIndex="-1" aria-labelledby={label} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={label}>{title}</h5>

            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="whitesmoke" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );




  const renderModal = () => {
    const modalContainer = document.querySelector('.modal-container');
    return createPortal(modal, modalContainer);
  }

  return (
    <>
      {/* <button
        data-bs-toggle="modal"
        data-bs-target={`#${id}`}
        className="addMember btn btn-danger"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
        </svg>
        {buttonText}
      </button> */}
      {modalButton}

      {renderModal()}

    </>
  );
}

export default Modal;