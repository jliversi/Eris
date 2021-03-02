
export const OPEN_MODAL = 'OPEN_MODAL';
export const OPEN_FS_MODAL = 'OPEN_FS_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CLOSE_FS_MODAL = 'CLOSE_FS_MODAL';


export const openModal = (modalType, data = {}) => ({
  type: OPEN_MODAL,
  modalType,
  data
});
export const openFsModal = (modalFsType, data = {}) => ({
  type: OPEN_FS_MODAL,
  modalFsType,
  data
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});
export const closeFsModal = () => ({
  type: CLOSE_FS_MODAL
});

