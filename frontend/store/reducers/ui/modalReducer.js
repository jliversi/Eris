import { OPEN_MODAL, CLOSE_MODAL, OPEN_FS_MODAL, CLOSE_FS_MODAL } from '../../../actions/modal_actions'

const _nullState = {
  modalType: null,
  modalFsType: null,
  data: null
}

const modalReducer = (state = _nullState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  const { modalType, modalFsType, data } = action;
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modalType,
        modalFsType: state.modalFsType,
        data: Object.assign({}, state.data, data)
      }
    case CLOSE_MODAL:
      return Object.assign({}, newState, { modalType: null })
    case OPEN_FS_MODAL:
      return {
        modalType: state.modalType,
        modalFsType,
        data: Object.assign({}, state.data, data)
      }
    case CLOSE_FS_MODAL:
      return Object.assign({}, newState, { modalFsType: null })
    default:
      return state;
  }
}

export default modalReducer;