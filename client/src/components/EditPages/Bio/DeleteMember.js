import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class DeleteMember extends Component {

  modalId = `del_modal_${this.props.id}`;
  modalLabel = `del_label_${this.props.id}`;
  deleteRoute = `/api/deleteMember/${this.props.id}`;

  modal = (
    <div className="deleteMember modal fade" id={this.modalId} tabIndex="-1" aria-labelledby={this.modalLabel} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={this.modalLabel}>DELETE MEMBER</h5>
            <div type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></div>
          </div>
          <div className="modal-body">
            Remove <span>{this.props.name}</span> as a member?
          </div>
          <div className="modal-footer">
            <div type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancel</div>
            <div type="button" className="btn btn-danger">
              <a href={this.deleteRoute}>Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  renderModal() {
    const modalContainer = document.querySelector('.modal-container');
    return createPortal(this.modal, modalContainer);
  }

  render() {
    return (
      <>
        <div
          className="btn-sm btn-danger"
          type="button"
          data-bs-toggle="modal"
          data-bs-target={`#${this.modalId}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </div>
        {this.renderModal()}
      </>
    );
  }
}

export default DeleteMember;