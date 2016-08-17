import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';

function visibleIds(state = [], action) {
  switch (action.type) {
    case types.RECEIVE_CHAMPIONS:
      return action.champions.map(champion => champion._id)
    default:
      return state;
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case types.RECEIVE_CHAMPIONS:
      return {
        ...state,
        ...action.champions.reduce((obj, champion) => {
          obj[champion._id] = champion;
          return obj;
        }, {})
      };
    default:
      const { championId } = action
      if (championId) {
        return {
          ...state,
          [championId]: champions(state[championId], action)
        };
      }
      return state;
  }
}

export default combineReducers({
  visibleIds,
  byId
});

export function getChampion(state, id) {
  return state.byId[id];
}

export function getVisibleChampions(state) {
  return state.visibleIds.map(id => getChampion(state, id));
}
