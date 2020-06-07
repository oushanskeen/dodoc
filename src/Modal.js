import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

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

const ModalDiv = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`

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
const Modal = ({ isShowing, hide, data}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <ModalOverlay/>
    <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
      <ModalDiv>
        <ModalHeader>
          <ModalCloseButton data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </ModalCloseButton>
        </ModalHeader>
          {data}
      </ModalDiv>
    </ModalWrapper>
  </React.Fragment>, document.body
) : null;

export default Modal;
