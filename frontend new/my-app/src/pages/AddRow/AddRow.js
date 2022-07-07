import React from 'react';
import { ModalMain } from '../../components';
import Modalsec from '../../components/Modalsec';
import { Button } from '../../components';


const AddRow = (props) => {
  const {
    modalAddPost,
    closeMapHandler,
    fetch_api,
    descriptionButtonInternal,
  }= props;

  return (
    <>
       <ModalMain
          show={modalAddPost}
          onCancel={closeMapHandler}
          header={'Post New Row in table'}
          contentClass="modal-content"
          footerClass="modal-actions"
          footer={
            <Button inverse onClick={closeMapHandler}>CLOSE</Button>
          }
          content= {
            <Modalsec 
                fetch_api={fetch_api} 
                onCancel={closeMapHandler}
                descriptionButtonInternal={descriptionButtonInternal}>
            </Modalsec>
         }
        />
    </>
  )
}

export default AddRow;
