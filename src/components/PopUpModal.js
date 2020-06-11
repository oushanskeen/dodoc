import React from 'react';
import { Modal } from '../Modal';
import useModal from '../useModal';
import { Button } from 'rebass';
import {DicButton } from './BeautyList';
const PopUpModal = ({name, data}) => {
  const { isShowing, toggle } = useModal(false);
  return (
    <>
      <Button bg='two' px={4} onClick={toggle}>{name}</Button>
      <Modal isShowing={isShowing} hide={toggle} data={data}/>
    </>
  );
}

export default PopUpModal;
