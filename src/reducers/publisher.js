import { FILTER_PUBLISHER } from '../actions';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case FILTER_PUBLISHER:
      return action.publisher;
    default:
      return state;
  }
};

export default filterReducer;
