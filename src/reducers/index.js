import { combineReducers } from 'redux';
import superheroReducer from './superheroes';
import filterReducer from './filter';

const rootReducer = combineReducers({
  superheroes: superheroReducer,
  publisher: filterReducer,
});

export default rootReducer;
