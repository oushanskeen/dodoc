import React from 'react';
import Modal from '../Modal';
import useModal from '../useModal';

const PopUpModal = ({name, data}) => {
  const { isShowing, toggle } = useModal(false);
  return (
    <>
      <button onClick={toggle}>{name}</button>
      <Modal isShowing={isShowing} hide={toggle} data={data}/>
    </>
  );
}

export default PopUpModal;
