import { FILTER_SUPERHERO } from '../actions/index';

const superheroReducer = (state = [], action) => {
  switch (action.type) {
    case FILTER_SUPERHERO: {
      return [...state, action.superheroes];
    }
    default:
      return state;
  }
};

export default superheroReducer;
