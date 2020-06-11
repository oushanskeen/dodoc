import React, { useState } from "react";
import ReactDOM from "react-dom";
import Portal from './Portal';
//import Modal from "react-modal";

export const Modal = ({ data, isOpen, onCancel, onSubmit}) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
    { isOpen &&
    <Portal>
    <div className='modal-overlay'>
      <div className='modal-window'>
        <div className='modal-header'>
          <button onClick={onCancel}>cancel</button>
        </div>
        <div className='modal-body'>
          {data}
        </div>
        <div className='modal-footer'>
          <button onClick={onCancel}>cancel</button>
          <button onClick={onSubmit}>submit</button>
        </div>
      </div>
    </div>
    </Portal>
    }
    </>
  );
};

