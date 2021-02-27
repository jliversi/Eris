
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import ServerCreateForm from './ServerCreateForm';
import ServerLeaveConfirm from './ServerLeaveConfirm';
import ServerSettings from './ServerSettings';


const modalComponents = {
  ServerCreateForm,
  ServerLeaveConfirm,
  ServerSettings
};

function Modal(props) {
  const dispatch = useDispatch();
  const background = useRef(null);
  const modal = useSelector(({ui: {modal}}) => modal);
  let Component = modalComponents[modal.modalType];
  if (!Component) return null;
  const close = () => {
    background.current.classList.add('modal-background-fade-out');
    if (modal.data.fullscreen) background.current.classList.add('modal-background-fade-out-fs');
    setTimeout(() => {
      dispatch(closeModal());
    }, 400);
  }
  return (
    <div ref={background} className={modal.data.fullscreen ? 'modal-background-fs' : 'modal-background'} onClick={close}>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        <Component closeModal={close} {...modal.data} />
      </div>
    </div>
  );
}

export default Modal;