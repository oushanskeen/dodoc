import React from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ component }) => {
  ReactDOM.createPortal(component, document.getElementById('root'))
};

export default Portal;
