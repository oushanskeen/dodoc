import React from 'react';
import Modal from '../Modal';
import useModal from '../useModal';
import { Button } from 'rebass';
const PopUpModal = ({name, data}) => {
  const { isShowing, toggle } = useModal(false);
  return (
    <div>
      <Button bg='two' onClick={toggle}>{name}</Button>
      <Modal isShowing={isShowing} hide={toggle} data={data}/>
    </div>
  );
}

export default PopUpModal;
