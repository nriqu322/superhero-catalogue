import { FILTER_SUPERHEROES } from '../actions/index';

const superheroReducer = (state = [], action) => {
  switch (action.type) {
    case FILTER_SUPERHEROES:
      return action.superheroes;
    default:
      return state;
  }
};

export default superheroReducer;
