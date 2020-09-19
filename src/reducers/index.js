import { combineReducers } from 'redux';
import currentHeroReducer from './currentHero'; // new
import superheroReducer from './superheroes';

const rootReducer = combineReducers({
  superheroes: superheroReducer,
  currentHero: currentHeroReducer, // new
});

export default rootReducer;
