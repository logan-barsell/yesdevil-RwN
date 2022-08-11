import React from 'react';
import CustomModal from '../Bootstrap/CustomModal';

const DeleteItem = ({ item, onDelete }) => {



  // const modal = (
  //   <div className="deleteItem modal fade" id={modalId} tabIndex="-1" aria-labelledby={modalLabel} aria-hidden="true">
  //     <div className="modal-dialog modal-dialog-centered">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <h5 className="modal-title" id={modalLabel}>DELETE {item.group.toUpperCase().slice(0, -1)}</h5>
  //           <div type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></div>
  //         </div>
  //         <div className="modal-body">
  //           Remove <span>{item.name}</span> from {item.group}?
  //         </div>
  //         <div className="modal-footer">
  //           <div type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancel</div>
  //           <div onClick={() => onDelete(item.id)} type="button" data-bs-dismiss="modal" className="btn btn-danger">
  //             Delete
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const renderModal = () => {
  //   const modalContainer = document.querySelector('.modal-container');
  //   return createPortal(modal, modalContainer);
  // }

  // const modalId = `del_item_${item.id}`;
  // const modalLabel = `del_item_label_${item.id}`;

  const modalProps = {
    id: `del_item_${item.id}`,
    label: `del_item_label_${item.id}`,
    title: `DELETE ${item.group.toUpperCase().slice(0, -1)}`
  }


  const ModalContent = () => {
    return (
      <>
        <div className="modal-body deleteItem">
          Remove <span>{item.name}</span> from {item.group}?
        </div>
        <div className="modal-footer">
          <div type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancel</div>
          <div onClick={() => onDelete(item.id)} type="button" data-bs-dismiss="modal" className="btn btn-danger">
            Delete
          </div>
        </div>
      </>
    )
  };

  const DeleteButton = () => {
    return (
      <div
        className="btn btn-sm btn-danger"
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#${modalProps.id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg>
      </div>
    )
  }


  return (
    // <>
    //   <div
    //     className="btn-sm btn-danger"
    //     type="button"
    //     data-bs-toggle="modal"
    //     data-bs-target={`#${modalId}`}>
    //     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
    //       <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
    //     </svg>
    //   </div>
    //   {renderModal()}
    // </>
    <>
      <CustomModal modalProps={modalProps} modalButton={<DeleteButton />}>
        <ModalContent />
      </CustomModal>
    </>
  );

}



export default DeleteItem;