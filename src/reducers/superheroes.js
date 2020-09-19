import { FILTER_SUPERHEROES, SET_CURRENT_HERO } from '../actions/index';

const initialState = {
  superheroes: [],
  currentHero: null,
};

const superheroReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_SUPERHEROES:
      return {
        superheroes: action.payload,
      };
    case SET_CURRENT_HERO:
      return {
        currentHero: action.payload,
      };
    default:
      return state;
  }
};

export default superheroReducer;
