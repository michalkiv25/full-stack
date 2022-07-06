import React from 'react';

import Button from '../Button';
import ModalMain from '../ModalMain';

const ErrorModal = props => {
 const {error, onClear}= props
  return (
    <ModalMain
      onCancel={onClear}
      header="An Error Occurred!"
      show={!!error}
      content= {error}
      contentError="contentError_className"
      footer={<Button onClick={onClear}>Okay</Button>}
    >
    </ModalMain>
  );
};

export default ErrorModal;