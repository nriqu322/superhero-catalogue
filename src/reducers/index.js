import { combineReducers } from 'redux';
import superheroReducer from './superhero';

export default combineReducers({
  superhero: superheroReducer,
});
