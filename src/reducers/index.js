import { combineReducers } from 'redux';
import superheroReducer from './superheroes';

const rootReducer = combineReducers({
  superheroes: superheroReducer,
});

export default rootReducer;
