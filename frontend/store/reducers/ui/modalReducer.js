import { OPEN_MODAL, CLOSE_MODAL } from '../../../actions/modal_actions'

const _nullState = {
  modalType: null
}

const modalReducer = (state = _nullState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return _nullState;
    default:
      return state;
  }
}

export default modalReducer;