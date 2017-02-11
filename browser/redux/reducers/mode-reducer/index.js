import { CHANGE_MODE } from '../../constants';
import initialState from '../../initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return state.merge({ isAFrame: true });
    default:
      return state;
  }
};
