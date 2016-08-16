import * as types from './actionTypes';
import championApi from '../api/mockChampions';

export function loadChampionsSuccess(champions){
  return { type: types.LOAD_CHAMPIONS_SUCCESS, champions };
}

export function loadChampions() {
  return function(dispatch) {
    return championApi.getAllChampions().then( champions => {
      loadChampionsSuccess(champions);
    }).catch( error => {
      throw(error);
    });
  };
}
