import { combineReducers } from 'redux';
import champions from './championReducer';

const rootReducer = combineReducers({
  champions,
  state: (state = {}) => state,
});

export default rootReducer;
