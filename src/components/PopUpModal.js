import React from 'react';
import Modal from '../Modal';
import useModal from '../useModal';

const PopUpModal = ({name, data}) => {
  const { isShowing, toggle } = useModal(false);
  return (
    <div>
      <button onClick={toggle}>{name}</button>
      <Modal isShowing={isShowing} hide={toggle} data={data}/>
    </div>
  );
}

export default PopUpModal;
