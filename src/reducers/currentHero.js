import { CURRENT_HERO } from '../actions/index';

const currentHeroReducer = (state = null, action) => {
  switch (action.type) {
    case CURRENT_HERO:
      return action.currentHero;
    default:
      return state;
  }
};

export default currentHeroReducer;
