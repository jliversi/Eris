
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { closeModal } from '../actions/modal_actions';
import ServerCreateForm from './servers/ServerCreateForm';

function Modal(props) {
  const dispatch = useDispatch();
  const background = useRef(null);
  const close = () => {
    background.current.classList.add('modal-background-fade-out');
    setTimeout(() => {
      dispatch(closeModal());
    }, 100);
  }
  const modal = useSelector(({ui: {modal}}) => modal);
  let component; 
  switch (modal.modalType) {
    case 'serverCreate':
      
      component = <ServerCreateForm />
      break;
    default:
      return null;
  }

  return (
    <div ref={background} className="modal-background" onClick={close}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

export default Modal;