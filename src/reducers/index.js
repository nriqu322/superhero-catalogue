import { combineReducers } from 'redux';
import superheroReducer from './superheroes';

const rootReducer = combineReducers({
  superhero: superheroReducer,
});

export default rootReducer;
