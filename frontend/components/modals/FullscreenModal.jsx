
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { closeFsModal } from '../../actions/modal_actions';
import ServerSettings from './ServerSettings';


const modalComponents = {
  ServerSettings
};

function FullscreenModal(props) {
  const dispatch = useDispatch();
  const background = useRef(null);
  const modal = useSelector(({ui: {modal}}) => modal);
  let Component = modalComponents[modal.modalFsType];
  if (!Component) return null;
  const close = () => {
    background.current.classList.add('modal-background-fade-out-fs');
    background.current.classList.add('modal-background-fade-out');
    setTimeout(() => {
      dispatch(closeFsModal());
    }, 400);
  }
  return (
    <div ref={background} className='modal-background-fs'>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        <Component closeModal={close} {...modal.data} />
      </div>
    </div>
  );
}

export default FullscreenModal;