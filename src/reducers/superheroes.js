import { FILTER_SUPERHEROES } from '../actions/index';

// const initialState = {
//   superheroes: [],
// };

const superheroReducer = (state = [], action) => {
  switch (action.type) {
    case FILTER_SUPERHEROES:
      console.log(action);
      return action.superheroes;
    default:
      return state;
  }
};

export default superheroReducer;