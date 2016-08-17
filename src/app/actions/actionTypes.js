export const LOAD_CHAMPIONS= 'LOAD_CHAMPIONS';
export const LOAD_CHAMPIONS_SUCCESS = 'LOAD_CHAMPIONS_SUCCESS';
export const LOAD_CHAMPIONS_FAILED = 'LOAD_CHAMPIONS_FAILED';
export const LOAD_CHAMPIONS_REQUESTED = 'LOAD_CHAMPIONS_REQUESTED';
export const RECEIVE_CHAMPIONS= 'RECEIVE_CHAMPIONS';

export function receiveChampions(champions) {
  return {
    type: RECEIVE_CHAMPIONS,
    champions: champions
  };
}
