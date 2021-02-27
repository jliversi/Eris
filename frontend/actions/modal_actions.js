
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';



export const openModal = (modalType, data = {}) => ({
  type: OPEN_MODAL,
  modal: {
    modalType,
    data
  }
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});

