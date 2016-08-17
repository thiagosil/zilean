import { fork, call, put } from 'redux-saga/effects';
import championApi from '../api/mockChampions';
import * as actions from '../actions/actionTypes';

export function* getAllChampions() {
  const champions = yield call(championApi.getAllChampions);
  yield put(actions.receiveChampions(champions));
}

export default function* root() {
  yield [
    fork(getAllChampions)
  ];
}
