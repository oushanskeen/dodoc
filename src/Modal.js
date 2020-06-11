import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import {background, opacity} from 'styled-system';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`;
const modalOverlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1040,
  width: '100wv',
  height: '100vh',
  backgroundColor: '#000',
  opacity: '.5',
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`
const modalWrapper = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1050,
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  outline: 0,
};
const ModalDiv = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 800px;
  padding: 2rem;
`
const modalDiv = {
  zIndex: 100,
  background: 'white',
  position: 'relative',
  margin: '1.75rem auto',
  borderRadius: '3px',
  maxWidth: '800px',
  padding: '2rem',
};
const ModalHeader = styled.div `
  display: flex;
  justify-content: flex-end;
`

const ModalCloseButton = styled.div ` 
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: .3;
  cursor: pointer;
  border: none;
`

const ModalButton = styled.button `
  font-size: .9rem;
  font-weight: 700;
  border: none;
  border-radius: 3px;
  padding: .3rem 1rem;
  margin-left: .5rem;
`

const ModalButtonDefault = styled.div`
  background: #247BA0;
  color: #fff;
`

const modalData = (
  <p> Hello, I am a modal...</p>
);
export const Modal = ({ isShowing, hide, data}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div style={modalOverlay}/>
    <div style={modalWrapper} role="dialog">
      <div style={modalDiv}>
        <ModalHeader>
          <ModalCloseButton onClick={hide}>
            <span>&times;</span>
          </ModalCloseButton>
        </ModalHeader>
          {data}
      </div>
    </div>
  </React.Fragment>, document.getElementById('root')
) : null;

//export default Modal;
