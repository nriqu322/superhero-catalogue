import { combineReducers } from 'redux';
import superheroReducer from './superheroes';
import filterReducer from './publisher';

const rootReducer = combineReducers({
  superheroes: superheroReducer,
  publisher: filterReducer,
});

export default rootReducer;
