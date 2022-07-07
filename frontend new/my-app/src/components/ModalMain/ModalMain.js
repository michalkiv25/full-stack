import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Header from '../Header';
import './ModalMain.css';

const ModalOverlay = props => {
    return (
        <>
            <Header 
                headerColor='#FFFAF0' 
                headerBackground='#663399' 
                sizeHeder= "50px" 
                headerEdit= "0px"
                {...props} >
            </Header> 
            <div className= {`modal__content ${props.contentError}`}>
                {props.content}
            </div>
            <footer className={`modal__footer ${props.footerClass}`}>
                {props.footer}
            </footer>
        </>
    )
}


const BodyModal = (props) => {
  return (
    <React.Fragment >
        <CSSTransition
            in={props.show}
            mountOnEnter
            unmountOnExit
            classNames="modal"
            timeout={100}
        >
        <div>
        <ModalOverlay {...props} />
        </div>
      </CSSTransition>
  </React.Fragment>
  )
}

export default BodyModal;