import { combineReducers } from 'redux';
import superheroReducer from './superheroes';

export default combineReducers({
  superhero: superheroReducer,
});
