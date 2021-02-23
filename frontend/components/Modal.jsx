
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { closeModal } from '../actions/modal_actions';
import ServerCreateForm from './servers/ServerCreateForm';


const modalComponents = {
  ServerCreateForm
};

function Modal(props) {
  const dispatch = useDispatch();
  const background = useRef(null);
  const close = () => {
    background.current.classList.add('modal-background-fade-out');
    setTimeout(() => {
      dispatch(closeModal());
    }, 400);
  }
  const modal = useSelector(({ui: {modal}}) => modal);
  let Component = modalComponents[modal.modalType];
  if (!Component) return null;

  return (
    <div ref={background} className="modal-background" onClick={close}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <Component closeModal={closeModal} />
      </div>
    </div>
  );
}

export default Modal;